import React, {Component} from 'react'; 

//Styles.
import './../assets/css/Header.css';

class Header extends Component{

    addTask = () => console.log('Add Task')

    render(){
        return(
            <div className="main">
		        <div className="wrap">
			        <form className="form" action="">

				        <input type="text" id="taskInput" placeholder="Add you task"/>

                        <input type="button" className="button" onClick={this.addTask} 
                        value="Add Task"/>

			        </form>
		        </div>
	        </div>
        )
    }
} 

export default Header;