import React from 'react'
import { useTask } from '../../context/useTask'
import { TaskForm } from './TaskForm'
import { TaskItem } from './TaskItem'


export const TodoList = () => {
  const { tasks,taskIdForEdit,} = useTask()
  
  return (
    <div className='mb-3'>
      {tasks.map(task => (
        task.id === taskIdForEdit
          ? <TaskForm key={task.id} mode='edit' editTask={{ name: task.name, description: task.description }} />
          : <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}

