import React from 'react'
import './styles/list-items.css'

function ListItems({index, task, completedTask, removeTask, editTask}) {
  return (
    <div >
      <div className='list-items' 
        style={{ 
          backgroundColor: task.isCompleted ? 'rgba(191, 197, 195, 0.57)' : 'rgb(221, 235, 235)',
          boxShadow: task.isCompleted ? '3px 2px 3px 0px rgba(0,0,0,0.2)' : '5px 4px 5px 0px rgba(0,0,0,0.4)'
        }}>
      
        <div className='todos'style={{textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
          {task.task} 
        </div>

        <div className='icons'> 
          <p onClick={()=> completedTask(index)}>✔</p>
          <p onClick={()=>removeTask(index)}>X</p>
          <p onClick={()=>editTask(index)} >Edit</p>
        </div>
      </div> 
    </div>
  )
}

export default ListItems