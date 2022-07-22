import React from 'react'

import { Header } from './components/Header/Header'
import { TaskForm } from './components/Todo/TaskForm'
import { TodoList } from './components/Todo/TaskList'
import { TaskProvider } from './context/TaskProvider'

export const App = () => {
  return (
    <TaskProvider>
      <div className=''>
        <div className=' mx-auto mt-10  max-w-[600px]  flex flex-col  rounded-xl items-center shadow-xl bg-sky-500'>
          <Header />
          <TaskForm mode='add'/>
          <TodoList/>
        </div>
      </div>
    </TaskProvider>
  )
}

