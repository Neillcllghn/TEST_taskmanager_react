import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast( {message} ) {
    const notify = () => toast.success(message);

    return (
      <div>
        <ToastContainer autoClose={3000}/>
        {message && notify()}
      </div>
    );
}

export default Toast