import React, { useState } from "react"
import DevoloperCard from '../devoloperCard/DevoloperCard'
import {connect} from "react-redux"


const TaskForm=(props)=>{





    const [data,setData]=useState({
        taskDescription:"",
        date:"",
        time:"",
        assignUser:""

    })


    const inputHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})


    }
    
    console.log(props.rootreducer)
    const deleteHandler=(id)=>{
        props.deleteUser(id)

    }
    console.log(props.rootreducer)
    



    return(
        <div className="task-form">
            <div className="head">
                <p>TASK 0 </p>
                <p className="plus-button" onClick={props.formHandler}>+</p>
            </div>
            
            <div className={`form ${props.form?"hide-form":""}`}>
                <form >
                    <label>
                        Task Description
                    </label>
                    <input placeholder="Follow Up" onChange={inputHandler} name="taskDescription" value={data.taskDescription}/>
                   
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
                    <input placeholder="User" onChange={inputHandler} name="assignUser" value={data.assignUser}/>

                </form>
                <div className="buttons">
                    <p>Cancel</p>
                    <p  onClick={()=>{
                        
                        props.insertData(data)}}>Save</p> 

                </div>
                </div>
                 <div className={`cards ${props.form?"show-cards":""}`}>

                     { props.rootreducer && props.rootreducer.map((item,index)=><DevoloperCard formHandler={props.formHandler} key={index} index={index} description={item.taskDescription} deleteHandler={deleteHandler} />)

                     }
                  
                  
                 </div>
               




            </div>

       
    )
}
const mapStateToProps=( rootreducer)=>{
    return {rootreducer}
  
  }
  const   mapDispatchProps=(dispatch)=>{
     return {
      
      deleteUser:(id)=>dispatch({type:"delete",payload:id}),
      
      insertData:(name)=> dispatch({type:"insertData",payload:name})  
      
  
    }
    }
  

export default connect(mapStateToProps,mapDispatchProps) (TaskForm);