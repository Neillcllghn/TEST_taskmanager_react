import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosRes } from '../api/axiosDefaults';

function TaskDeleteModal({id}) {
    const [show, setShow] = useState(false);
    const history = useHistory()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async () => {
        console.log(`Deleting task with ID: ${id}`);
        try {
            await axiosRes.delete(`/tasks/${id}`);
            console.log(`Task with ID: ${id} deleted successfully.`);
            history.push("/tasklist/");
            setShow(false);
            window.location.reload();
        } catch(err) {
            console.log(err);
            if (err.response) {
                console.log(`Error status code: ${err.response.status}`);
                console.log(`Error data:`, err.response.data);
            }
        }
    };

  
    return (
      <>
        <Button className="btn btn-danger mr-2" onClick={handleShow}>
          Delete
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Warning!</Modal.Title>
          </Modal.Header>
          <Modal.Body>You are about to delete your task</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button className="btn btn-danger mr-2" onClick={handleDelete}>
                Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

export default TaskDeleteModal