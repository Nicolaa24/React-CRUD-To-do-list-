import React from 'react'

import { Task } from '../../types'

import { FaTrash } from 'react-icons/fa'
import {VscEdit} from 'react-icons/vsc'
import { useTask } from '../../context/useTask'

interface TaskItem {
  task:Task
}

export const TaskItem: React.FC<TaskItem> = ({ task }) => {
  const {checkedTask,deleteTask,getTaskIdForEdit} = useTask()
  return (
    <div className='flex justify-between items-center  border  border-solid border-1 border-white rounded-xl w-[400px] mb-3'>
      <div style={{
        opacity: task.completed ? 0.5 : 1,
        textDecoration: task.completed ? 'line-through' : 'none'
      }}
        className='flex flex-col p-2 mb-2 cursor-pointer text-white'
        onClick={()=>checkedTask(task.id)}
      >
        <div className='mb-2'>
          {task.name}
        </div>
        <div>
          {task.description}
        </div>
      </div>
      <div className='flex flex-row items-center '>
        {!task.completed && <VscEdit className='text-xl mx-2 cursor-pointer' onClick={()=>getTaskIdForEdit(task.id)}/>}
        {!task.completed && <FaTrash className='text-xl text-gray-900 mx-3 cursor-pointer' onClick={() =>
          deleteTask(task.id)} />}
      </div>
    </div>
  )
}

