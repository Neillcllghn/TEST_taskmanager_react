import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


function TaskCreateForm() {

  const [errors, setErrors] = useState({});

  const [taskData, setTaskData] = useState({
    title:"",
    description:"",
    urgent: false,
    due_date:"",
    completed: false,
  });

  const { title, description, urgent, due_date, completed } = taskData;

  const dateInputRef = useRef(null);

  const handleChange = (event) => {
    setTaskData({
        ...taskData,
        [event.target.name]: event.target.value,
    });
  };

  return (
    <Form>
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
        {/* <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control
            type="dropdown" 
            placeholder="select a Category" 
            name ="category"
            value={category}
            onChange={handleChange}
            />
        </Form.Group> */}
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
         type="submit">
            Create
        </Button>
        <Button 
         onClick={() => {}}>
            Cancel
        </Button>
    </Form>
  );
}

export default TaskCreateForm;