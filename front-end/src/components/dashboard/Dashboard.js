import { useForm } from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import './Dashboard.css'
import TodoList from '../todolist/TodoList'
import { addingtask, fetchtasks } from '../../redux/actions'
import { useEffect } from 'react'
function Dashboard() {
    const {tasks}=useSelector(state=>state.TodoReducer)
    const { register, handleSubmit,reset, formState: { errors } } = useForm()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchtasks())
    })
    function ontasksubmit(Todo_task) {    
        reset()        
        dispatch(addingtask(Todo_task))
    }
    let pending=tasks.filter(e=>e.ischecked===false).length
    let Completed=tasks.length-pending
    return (
        <div className="dashlist">
            <div className='card dashlistadd bg-dark'>
                <h1 className="fw-bold text-success text-center mt-5 mb-4">TODO LIST</h1>
                <form className="d-flex justify-content-center mb-5" onSubmit={handleSubmit(ontasksubmit)}>
                    <div className='addinput'>
                        <input type="text" placeholder='Add a Task' className='form-control' {...register('Todo_task', { required: true })} />
                        {errors.Todo_task && (<p className='text-light mt-2'>* Todo task required</p>)}
                    </div>
                    <button type='submit' className='btn btn-success h-75'>+ Add Todo</button>
                </form>
            </div>
            <div className='dashlistdis bg-dark card'>
                <TodoList />
                
            </div>
            <div className="d-flex justify-content-around mt-3">
                <p className="text-light"><b>Completed : </b>{Completed}</p>
                <p className="text-light"><b>pending : </b>{pending}</p>
            </div>
        </div>
    )
}

export default Dashboard
