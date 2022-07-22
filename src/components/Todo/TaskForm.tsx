import React from 'react'

import { useTask } from '../../context/useTask'
import { Task } from '../../types'

import { MdOutlineAddCircleOutline } from 'react-icons/md'
import {VscEdit} from 'react-icons/vsc'

const DEFAULT_TASK = {
  name: '',
  description: ''
}

interface AddTask {
  mode:'add'
}

interface EditTask {
  mode: 'edit'
  editTask: Omit<Task, 'id' | 'completed'>
}

type TaskForm = AddTask | EditTask

export const TaskForm: React.FC<TaskForm> = (props) => {
  const {addTask,changeTask,} = useTask()
  
  const isEdit = props.mode === 'edit';
  
  const [task, setTask] = React.useState(isEdit ? props.editTask : DEFAULT_TASK);
  
  const getInputValue = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setTask({...task, [name]:value})
  }

  const addTaskHandler = () => {
    const taskItem = { name: task.name, description: task.description }
    if (isEdit) {
      return changeTask(taskItem)
    }
      addTask(taskItem)
      setTask(DEFAULT_TASK)
  }

  return (
    <div className='flex justify-between items-center mb-4'>
      <div className='mr-2'>
        <div className='mb-5'>
          <label htmlFor='name' />
          <p>Task name</p>
          <input placeholder='Enter name' type='text' id='name' name='name' value={task.name} onChange={getInputValue} />
        </div>
        <div>
          <label htmlFor='description' />
          <p>Task description</p>
          <input placeholder='Enter desc...' type='text' id='description' name='description' value={task.description} onChange={getInputValue} />
        </div>
      </div>
      <div className='ml-2'>
        {!isEdit && <MdOutlineAddCircleOutline size={38} className='cursor-pointer' onClick={addTaskHandler}>
          Create</MdOutlineAddCircleOutline>}
        {isEdit && <VscEdit size={24} className='cursor-pointer' onClick={addTaskHandler}>
          Edit</VscEdit>}
      </div>
    </div>
  )
}
