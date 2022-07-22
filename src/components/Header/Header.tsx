import { useTask} from '../../context/useTask'

export const Header = () => {
  const {tasks} = useTask()
  return (
    <div className='flex flex-col p-1 '>
      <div className='text-3xl text-white font-bold my-2 '>CRUD Todo</div>
      <div className='text-white p-2'>Task amount: {tasks.length}</div>
    </div>
  )
}

