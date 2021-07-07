import React from "react"


const TaskForm=()=>{

    return(
        <div className="task-form">
            <div className="head">
                <p>TASK 0 </p>
                <p className="plus-button">+</p>
            </div>
            <div className="form-body">
            <div className="form">
                <form >
                    <label>
                        Task Description
                    </label>
                    <input placeholder="Follow Up"/>
                   
                    <div className="date-time">
                        <div className="date">
                        <label>Date</label>

                        <input placeholder="date"/>

                        </div>
                        <div className="time">
                        <label placeholder="Time">Time</label>
                       <input placeholder="Time"/>

                        </div>
                    
                    

                    </div>
                    
                    <label>Assign User</label>
                    <input placeholder="User"/>

                </form>
                <div className="buttons">
                    <p>Cancel</p>
                    <p>Save</p> 

                </div>
                </div>




            </div>

        </div>
    )
}

export default TaskForm;