import React, { useState, useEffect } from 'react';
import { axiosReq } from '../../api/axiosDefaults';
import TaskItem from './TaskItem';
import { Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import appStyles from "../../App.module.css"
import Asset from '../../components/Assets';
import TaskSearchBar from '../../components/TaskSearchBar';
import styles from '../../styles/TaskList.module.css';


function TaskList({message, filter=""}) {
    const [tasks, setTasks] = useState([]);
    const [showCompleted, setShowCompleted] = useState(true);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [query, setQuery] = useState("");
    const { pathname } = useLocation();
    const history = useHistory();
    const location = useLocation();
    const [successMessage, setSuccessMessage] = useState('');


    useEffect(() => {
        const fetchTasks = async () => {
          try {
            const { data } = await axiosReq.get(`/tasks/?filter=${filter}&search=${query}`);
            const tasksData = data.results;
            setTasks(tasksData);
            setHasLoaded(true); 
          } catch (err) {
            console.log(err)
          }
        };

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchTasks();
          }, 500);
      
          return () => {
            clearTimeout(timer);
          };
    
      }, [filter, query, pathname]);

      const filteredTasks = tasks.filter((task) => {
        if (showCompleted) {
            return true;
        } else {
            return !task.completed;
        }
      })

      const handleEditClick = (taskId) => {
        history.push(`/tasks/${taskId}/edit`);
     };

     useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const successMessage = queryParams.get('success');
        if (successMessage) {
            setSuccessMessage(successMessage);
            setTimeout(() => {
                setSuccessMessage('');
              }, 3000);
        }
      }, [location.search]);

  return (
    <div>
        <h1>Task List</h1>
        <label>
        Show Completed Tasks:
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={() => setShowCompleted(!showCompleted)}
        />
        </label>

        <TaskSearchBar query={query} onQueryChange={setQuery} />
        {successMessage && (
        <Container className={styles.success-message}>
        <div className={`${styles.success-message} ${successMessage ? 'show' : ''}`}>
        {successMessage}
        </div>
      </Container>
      )}

        {hasLoaded ? (
        <>
            {tasks.length ? (
            filteredTasks.map((task) => (
                <TaskItem
                key={task.id}
                id={task.id}
                task={task}
                profile_id={task.profile_id}
                profile_image={task.profile_image}
                owner={task.owner}
                onEditClick={() => handleEditClick(task.id)}
                />))
                
                ) : (
                    <Container className={appStyles.Content}>
                        <Asset message={message} />
                    </Container>
                )}
        </>
        ) : (
            <Container className={appStyles.Content}>
                 <Asset spinner />
            </Container>
        )}
    </div>
  )
}

export default TaskList;