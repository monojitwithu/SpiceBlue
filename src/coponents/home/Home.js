import React, { useState } from "react"
import TaskForm from "../common/form/TaskForm"



const Home=()=>{
    
    const [form,setForm]=useState(true)

    const formHandler=()=>{
        form?setForm(false):setForm(true)
    }
    

    return(
        <div className="home">
            <div className="menu">
                

            </div>
            <div className="portal">
                <div className="task-management">

                    <TaskForm formHandler={formHandler} form={form}/>
                    
                    

                </div>
                
                

            </div>
            
        </div>
    )
}

export default Home;