import React from 'react'
import './styles/modal.css'

function Modal({index, task, updateTask, submmitTask, closeModal}) {
  return (
  
  <div className='main-wrapper'>
    <div className='modal-wrapper'>

    <button className='cancel-button' onClick={() => closeModal(index)} >x</button>
      <p>Edit Task</p>
      <input 
        type="text" 
        value={task.task}
        placeholder='edit task'
        onChange={(e) => updateTask(index, e.target.value)}
      />
      <div className='modal-icons'>
        <button onClick={() => submmitTask(index)}>update</button>
      </div>
    </div>
  </div>
  )
}

export default Modal