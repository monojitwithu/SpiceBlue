import {createStore} from "redux"
import rootReducer from "./coponents/reducer/rootReducer"


export default ()=>{
    return createStore(rootReducer)
}