import React, { Component } from 'react';

//Styles.
import './../assets/css/Tasks.css';

//Data.
import tasks from './../simulation_data/tasks.json';

class Tasks extends Component {

    state = {
        tasks: tasks
    }

    render() {
        return (
            <div>

                {
                    this.state.tasks.map(task => {
                        return (
                            <div className="tasks">
                                <div className="wrap">
                                    <ul className="list">
                                        <li>
                                            <p key={task.id}>{task.title}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Tasks;