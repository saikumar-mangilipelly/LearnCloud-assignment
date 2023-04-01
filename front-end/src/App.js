import React from 'react'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/dashboard/Dashboard'
function App() {
  return (
    <>
    <div className="container">
      <Dashboard/>    
    </div>
    <ToastContainer/>
    </>    
  )
}

export default App
