import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import styles from "../../styles/TaskCreateEditForm.module.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import { Alert } from "react-bootstrap";


function TaskCreateForm() {

  const [errors, setErrors] = useState({});

  const [taskData, setTaskData] = useState({
    title:"",
    category: [],
    description:"",
    urgent: false,
    due_date:"",
    completed: false,
  });

  const { title, category, description, urgent, due_date, completed } = taskData;
  const history = useHistory();

  const dateInputRef = useRef(null);

  const handleChange = (event) => {
    setTaskData({
        ...taskData,
        [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append(
        'title', title,
        'category', category,
        'description', description,
        'urgent', urgent,
        'due_date', due_date,
        'completed', completed

    );

    try{
        const {data} =  await axiosReq.post('/tasks/', formData);
        history.push(`/tasks/${data.id}`)
    } catch (err){
        console.log(err)
        if (err.response?.status !== 401){
            setErrors(err.response?.data)
        }

    }
}

  return (
    <Row className={styles.Row}>
        <Container className='col-md-6 col-sma-10 mx-auto p-0'>
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>Task Title</Form.Label>
            <Form.Control
            type="text" 
            placeholder="Enter Task Title" 
            name ="title"
            value={title}
            onChange={handleChange}
            />
        </Form.Group>
        {errors.title?.map((message, idx) =>
            <Alert variant="warning" key={idx}>{message}</Alert>
        )}
        <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control
            as="select"
            placeholder="Select a Category" 
            name ="category"
            value={category}
            onChange={handleChange}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Form.Control>
            </Form.Group>
        {errors.category?.map((message, idx) =>
            <Alert variant="warning" key={idx}>{message}</Alert>
        )}
        <Form.Group>
            <Form.Label>Task Description</Form.Label>
            <Form.Control
            type="text" 
            placeholder="Enter Task description" 
            name ="description"
            value={description}
            onChange={handleChange}
            />
        </Form.Group>
        {errors.description?.map((message, idx) =>
            <Alert variant="warning" key={idx}>{message}</Alert>
        )}
        <Form.Group check>
            <Form.Label>Urgent</Form.Label>
            <Form.Control
            type="checkbox" 
            name ="urgent"
            value={urgent}
            onChange={handleChange}
            />
        </Form.Group>
        <Form.Group>
            <Form.Label>Task Due Date</Form.Label>
            <Form.Control
            type="date" 
            name ="due_date"
            value={due_date}
            ref= {dateInputRef}
            onChange={handleChange}
            />
        </Form.Group>
        {errors.due_date?.map((message, idx) =>
            <Alert variant="warning" key={idx}>{message}</Alert>
        )}
        <Form.Group check>
            <Form.Label>Completed</Form.Label>
            <Form.Control
            type="checkbox" 
            name ="completed"
            value={completed}
            onChange={handleChange}
            />
        </Form.Group>

        <Button 
         type="submit" color="success">
            Create
        </Button>
        <Button 
         className="btn btn-danger mr-2" onClick={() => history.goBack()}>
            Cancel
        </Button>
    </Form>
    </Container>
    </Row>
  );
}

export default TaskCreateForm;