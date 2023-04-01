import axios from 'axios'
import { toast } from 'react-toastify'
export const ADD_TASK='ADD_TASK'
export const CHECK_TASK='CHECK_TASK'
export const FETCH_TASK='FETCH_TASK'
export const addingtask=(Todo_task)=>{
    Todo_task.ischecked=false
    return async dispatch=>{
        await axios.post('/todo/addtask',Todo_task)
        .then(response=>{       
            toast.success(response.data.message, {
                position: "top-center",
                autoClose: 2000,
                pauseOnHover: false,
                closeOnClick: true,
                draggable: true,
                theme: "colored",
            })    
            return dispatch({
                type:ADD_TASK,
                payload:response.data.payload
            })
        })
    }
}
export const fetchtasks=()=>{
    return async dispatch=>{
        await axios.get('/todo/gettasks')
        .then(response=>{    
            return dispatch({
                type:FETCH_TASK,
                payload:response.data.payload
            })
        })
    }
}
export const taskcheck=(Tododata)=>{    
    return async dispatch=>{
        await axios.put('/todo/taskcheck',Tododata)
        .then(response=>{            
            return dispatch({
                type:CHECK_TASK,
                payload:response.data.payload
            })
        })
    }
}