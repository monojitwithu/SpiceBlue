const defaultState=[
    
]
   




export default (state=defaultState,{type,payload,id})=>{
    
      
    switch(type){
        case "insertData":     
            return[...state,payload];
        case "delete": 
        let arr=[...state]
        arr.splice(payload,1)
        return arr;
        case "edit":
            let arr2=[...state]
    
            arr2[id].assignUser=payload.assignUser;
            arr2[id].time=payload.time;
            arr2[id].date=payload.date;
            arr2[id].taskDescription=payload.taskDescription
            console.log("hello")
            return  arr2
         
        default:return state
    }


    
}