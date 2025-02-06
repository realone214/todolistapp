import React, { useEffect, useState } from 'react'
import './styles/main-form.css'
import ListItems from './ListItems'
import Overlay from './Overlay'
import Modal from './Modal'

function MainForm() {
  
  const [tasks, setTasks] = useState("")
  const [todos, setTodos] = useState(()=>{return JSON.parse(localStorage.getItem("todosData")) || []})

  useEffect(() => {
    localStorage.setItem("todosData", JSON.stringify(todos))          
  },[todos]) 

  
  const addTask = ()=> {
    const newTask = [...todos, {task:tasks, isCompleted:false}]
    if (!tasks) return;
    setTodos(newTask)
    setTasks("")
  }
 
  const  removeTask = index => {
    const newTask = [...todos];
    newTask.splice(index,1);
    setTodos(newTask);
  }

  const completedTask = index => {
    const newTask = [...todos];
    newTask[index].isCompleted = true;
    setTodos(newTask);
  }

  const editTask = (index) => {
    const newTask = [...todos];
    newTask[index].isEditing = true;
    setTodos(newTask);
  }

  const updateTask = (index, task) => {
    const newTask = [...todos];
    newTask[index].task = task;
    setTodos(newTask);
  }

  const closeModal = (index) => {
    const newTask = [...todos];
    newTask[index].isEditing = false;
    setTodos(newTask);
  }
  
  const submmitTask = (index) => {
    const newTask = [...todos];
    newTask[index].isEditing = false;
    newTask[index].isCompleted = false;
    setTodos(newTask);
  }
  
  return (
    <>
     
      <h1>Todo List</h1>
      <p>Add a task to your list, Edit your tasks and mark them as completed or delete them.</p>
      <div className='input-task-counter'>
        <div>
          <input className='input-field' type="text" value={tasks} 
            placeholder='enter a task' 
            onChange={e => setTasks(e.target.value)} 
          />
        <button onClick={addTask}>+</button>
        </div>
        <p>{todos.filter(todo => !todo.isCompleted).length} - tasks left</p>
      </div>
      {todos.map((todo, index) => (
        <div key={index}>
          <ListItems 
            task={todo}
            index={index}
            completedTask={completedTask}
            removeTask={removeTask}
            editTask={editTask}
          />
          {todo.isEditing &&  <Modal 
            updateTask={updateTask} 
            task={todo} 
            index={index} 
            closeModal={closeModal}
            submmitTask={submmitTask}
          />}

          {todo.isEditing && <Overlay index={index} closeModal={closeModal} />}
        </div>
      ))}
      
      <footer>
          <div>
            <p> ✔ - complete task</p>
            <p> X - delete task</p>
          </div>
      </footer>
    </>
  )
}
export default MainForm