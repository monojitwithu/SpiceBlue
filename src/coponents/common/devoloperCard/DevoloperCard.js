import React, { useState } from "react"
import image from "./3.png"
import {BiEdit} from "react-icons/bi"
import {MdDelete} from "react-icons/md"
import {connect} from "react-redux"




const DevoloperCard=({formHandler,description,deleteHandler,index,date,editData})=>{

    const [data,setData]=useState({
        taskDescription:"",
        date:"",
        time:"",
        assignUser:""

    })


    const inputHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})


    }







    const [visibility,setVisibility]=useState(true)
    // const payload={
    //     taskDescription:"hello",
    //     date:"122222",
    //     time:"56",
    //     assignUser:"AAAAAAAAAAAAAA"

    // }
    console.log(editData)

    const editfromToggle=()=>{
        visibility?setVisibility(false):setVisibility(true)
        console.log("working")

    }

   
    
    return(
        <div className="devoloper-card">
            <div className="task-information">
                
                <img src={image}/>
                <div className="date">
                    <p>{description}</p>
                    <p style={{color:"red"}}>{date}</p>
                </div>
                </div>
                <div className="edit-options" >
                    <MdDelete onClick={()=>deleteHandler(index)}/>
                    <BiEdit onClick={editfromToggle }/>
                        

                </div>


                <div className={`edit-form ${visibility?"":"visible"}`} >


                <form  style={{marginRight:"36px",
    display: "grid"}}>
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
                       <input placeholder="Time" type="time" onChange={inputHandler} name="time" />
                       
                       
                       

                        </div>
                    
                    

                    </div>
                    
                    <label>Assign User</label>
                    <input placeholder="User" onChange={inputHandler} name="assignUser" value={data.assignUser}/>

                </form>
                <div className="buttons">
                    
                    <p  onClick={()=>{
                        editfromToggle()
                        
                        
                        editData(data,index)}} style={{width:"194px"}}>Save Changes</p> 

                </div>
                




























































                    
                    

                </div>

                {/* <button onClick={()=> editData(payload,index)}> Click</button> */}

            

        </div>
    )
}

const mapStateToProps=( rootreducer)=>{
    return {rootreducer}
  
  }
  const   mapDispatchProps=(dispatch)=>{
     return {
      
      
       
      editData :(data,index)=>dispatch({type:"edit",payload:data,id:index})
      
  
    }
    }


export default connect(mapStateToProps,mapDispatchProps) (DevoloperCard);