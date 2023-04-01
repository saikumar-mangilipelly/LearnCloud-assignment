import { ADD_TASK, CHECK_TASK, FETCH_TASK } from "./actions"
const intialState={
    tasks:[]
}
function TodoReducer(state=intialState,action){
    switch(action.type){
        case ADD_TASK:
            return {...state,tasks:[...state.tasks,action.payload]}
        case FETCH_TASK:
            return {...state,tasks:action.payload}
        case CHECK_TASK:
            let temp=state.tasks.find(e=>JSON.stringify(e._id)===JSON.stringify(action.payload))
            temp.ischecked=!temp.ischecked
            return {...state,tasks:state.tasks}
        default:
            return state
    }
}
export default TodoReducer