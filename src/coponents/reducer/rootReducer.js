const defaultState=[
    
]
   




export default (state=defaultState,{type,payload})=>{
    
      
    switch(type){
        case "insertData":return[...state,payload];
        case "delete": 
        let arr=[...state]
        arr.splice(payload,1)
        return arr;
        default:return state
    }


    
}