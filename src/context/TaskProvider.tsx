import React from 'react'
import { Task } from '../types'
import { TaskContext } from './TaskContext'

const DEFAULT_TASKS = [
  {id:1, name:'Typescript', description: 'learn better Typescript', checked: true}
]

interface TodoProvider  {
  children: React.ReactNode
}

export const TaskProvider: React.FC<TodoProvider> = ({ children }) => {
  // const storedTasks= JSON.parse(localStorage.getItem('tasks') ?? JSON.stringify(DEFAULT_TASKS))
  const storedTasks:Task[] = JSON.parse(localStorage.getItem('tasks') ?? JSON.stringify(DEFAULT_TASKS))
  const [tasks, setTasks] = React.useState(storedTasks) 
  const [taskIdForEdit,setTaskIdForEdit] = React.useState<Task['id'] | null>(null)
  
  const addTask = ({name,description}: Omit<Task, 'completed' | 'id'>) => {
    if (!name || !description ) { 
      alert('Fields is empty! Enter task')
      return
    }
    setTasks([...tasks, { name, description, id: Math.random(), completed: false }])
  
  }

  const deleteTask = (id:Task['id']) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const checkedTask = (id:Task['id']) => {
    setTasks(tasks.map(task => (
      task.id === id ? {...task,completed:!task.completed} : task
    )))
  }

  const changeTask = ({name,description}:Omit<Task, 'completed' | 'id'>) => {
    setTasks(tasks.map(task => task.id === taskIdForEdit ? { ...task, name, description } : task))
    setTaskIdForEdit(null)
  }
   
  const getTaskIdForEdit = (id: Task['id']) => {
    setTaskIdForEdit(id)
  }

  const value = {
    tasks,
    addTask,
    deleteTask,
    checkedTask,
    getTaskIdForEdit,
    taskIdForEdit,
    changeTask,
  }

  React.useEffect(() => {
  localStorage.setItem('tasks',JSON.stringify(tasks))    
  },[tasks])

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}

