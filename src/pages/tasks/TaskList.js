import React, { Component } from 'react'
import styles from "../../styles/TaskList.module.css";

const categories = [
    {
        id: 1,
        category_title: "Software Development",
    },
    {
        id: 2,
        category_title: "Hobbies",
    },
    {
        id: 3,
        category_title: "Finance",
    },
]



const tasks = [
    {
        id: 1,
        category_id: 1,
        title: "PP5",
        description: "Advanced FrontEnd Project",
        urgent: true,
        due_date: "31-07-2023",
        completed: false,
    },
    {
        id: 2,
        category_id: 2,
        title: "Football Session",
        description: "Organize session with Friend",
        urgent: false,
        due_date: "30-08-2023",
        completed: true,
    },
]




class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state={
            viewCompleted:false,
            viewUrgent:false,
            taskList: tasks,
            categoryList: categories,
        };
    }

    displayCompleted = status => {
        if (status) {
            return this.setState({ viewCompleted: true });
        }
        return this.setState({ viewCompleted: false });
    }

    displayUrgent = status => {
        if (status) {
            return this.setState({ viewUrgent: true });
        }
        return this.setState({ viewUrgent: false });
    }


    renderTabList = () => {
        return (
            <div className= {`my-5 ${styles.TabList}`}>
                <span
                onClick={() => this.displayCompleted(true)}
                className={`${this.state.viewCompleted ? styles.active : ""}`}
                >
                    Completed
                </span>
                <span 
                onClick={() => this.displayCompleted(false)}
                className={`${this.state.viewCompleted ? "" : styles.active}`}>
                    Incomplete
                </span>
            </div>
        )
    }

    // rendering all items in the list (completed || incompleted)
    renderItems = () => {
        const { viewCompleted } = this.state;
        const newItems = this.state.taskList.filter(
            item => item.completed === viewCompleted
        );

        return newItems.map(item => (
            <li 
            key={item.id}
            className="list-group-item d-flex justify-content-between align-utems-center"
            >
              <span className={`${styles.TasksTitle} mr-2 ${this.state.viewCompleted ? "completed-tasks" : ""}`}
              title={item.title}>
                {item.title}
              </span>
              <span>
                <button className='btn btn-info mr-2'>Edit</button>
                <button className='btn btn-danger mr-2'>Delete</button>
                </span>
            </li>
        ))
    };

    render() {
        return (
            <div>
            <main className="context">
                <h1>Task list</h1>
                <div className='row'>
                    <div className='col-md-6 col-sma-10 mx-auto p-0'>
                        {this.renderTabList()}
                        <ul className='"list-group list-group-flush'>
                        {this.renderItems()}

                        </ul>

                    </div>
                </div>

            </main>
            </div>
        )
    }


}

export default TaskList;