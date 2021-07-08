import React from "react"
import image from "./3.png"
import {BiEdit} from "react-icons/bi"
import {MdDelete} from "react-icons/md"



const DevoloperCard=({formHandler,description,deleteHandler,index,date})=>{
   
    
    return(
        <div className="devoloper-card">
            <div className="task-information">
                
                <img src={image}/>
                <div className="date">
                    <p>{description}</p>
                    <p>{date}</p>
                </div>
                </div>
                <div className="edit-options" >
                    <MdDelete onClick={()=>deleteHandler(index)}/>
                  <BiEdit onClick={()=>formHandler(index)} />

                </div>

            

        </div>
    )
}


export default DevoloperCard;