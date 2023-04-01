import { useDispatch, useSelector } from 'react-redux'
import './TodoList.css'
import { taskcheck } from '../../redux/actions'
function TodoList() {    
    let { tasks } = useSelector(state => state.TodoReducer)
    const dispatch=useDispatch() 
    function handlechange(Tododata) {
        dispatch(taskcheck(Tododata))
    }        
    if (tasks.length===0) {
        return (
            <h1 className='text-light text-center mt-5'>No TODO'S present Add TODO</h1>
        )
    }
    else {
        return (
            <div className='todolist'>  
                <div className="form-check fs-4">
                    {tasks.map(t => (
                        <div key={t._id} className='mb-2'>
                            <input type="checkbox" className='form-check-input' id={t._id} onChange={() => handlechange(t)} checked={t.ischecked}/>
                            <label htmlFor={t._id} className={`form-check-label text-light ${t.ischecked && 'ischeck'}`}>{t.Todo_task}</label>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default TodoList
