import React, { Component } from 'react';

//Styles.
import './../assets/css/Tasks.css';

class Tasks extends Component{
    render(){
        return(
            <div class="tareas">
		        <div class="wrap">
                    <ul class="list" id="lista">
                        <li><a href="">1 This is the task one.</a></li>
                        <li><a href="">2 This is the task two.</a></li>
                        <li><a href="">3 This is the task three.</a></li>
                    </ul>
		        </div>
	        </div>
        )
    }
}

export default Tasks;