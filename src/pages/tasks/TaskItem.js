import React from 'react'

function TaskItem({ task }) {
  return (
    <li>
        <h3>{task.title}</h3>
        <p>Description: {task.description}</p>
        <p>Urgent: {task.is_urgent ? 'Yes' : 'No'}</p>
        <p>Due Date: {task.due_date}</p>
        <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
    </li>
  )
}

export default TaskItem