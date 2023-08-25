import React, { useState, useEffect } from 'react'
import { axiosReq } from '../../api/axiosDefaults';
import TaskItem from './TaskItem';
import { Container } from 'react-bootstrap';
import appStyles from "../../App.module.css"
import Asset from '../../components/Assets';

function TaskList({message, filter=""}) {
    const [tasks, setTasks] = useState([]);
    const [showCompleted, setShowCompleted] = useState(true);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const fetchTasks = async () => {
          try {
            const {data} = await axiosReq.get('/tasks/');
            setTasks(data);
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
    
      }, []);

      const filteredTasks = tasks.filter((task) => {
        if (showCompleted) {
            return true;
        } else {
            return !task.completed;
        }
      })

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
        {hasLoaded ? (
        <ul>
            {filteredTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul> ) : (
            <Container className={appStyles.Content}>
            <Asset spinner />                     
            </Container>
        )}
    </div>
  )
}

export default TaskList;