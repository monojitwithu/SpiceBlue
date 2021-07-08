import React, { useState } from "react"
import DevoloperCard from '../devoloperCard/DevoloperCard'
import {connect} from "react-redux"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"


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
                        <input type="date" onChange={inputHandler} name="date"/>

                        
                        {/* <DatePicker selected={data.date} onChange={(date)=>setData({...data,date:date})}  dateFormat='dd/MM/yyyy'/> */}

                        </div>
                        <div className="time">
                        <label placeholder="Time">Time</label>
                       <input placeholder="Time" type="select" onChange={inputHandler} name="time" />
                       
                       
                       

                        </div>
                    
                    

                    </div>
                    
                    <label>Assign User</label>
                    <input placeholder="User" onChange={inputHandler} name="assignUser" value={data.assignUser}/>

                </form>
                <div className="buttons">
                    <p onClick={props.formHandler}>Cancel </p>
                    <p  onClick={()=>{
                        props.formHandler()
                        
                        props.insertData(data)}}>Save</p> 

                </div>
                </div>
                 <div className={`cards ${props.form?"show-cards":""}`}>

                     { props.rootreducer && props.rootreducer.map((item,index)=><DevoloperCard formHandler={props.formHandler} key={index} index={index} description={item.taskDescription} deleteHandler={deleteHandler} date={item.date} />)

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