import React from 'react'
import './Goal.css'
import { Link } from 'react-router-dom'
export const Goal = () => {
  return (
    <div className='m-5 mt-10 flex  flex-col h-full center gap-6'>
      <div className='text-xl font-bold mb-10 text-center'>What are your goals?</div>
      <div className="choice h-10 rounded-xl text-black  w-full ">
        <span className='pl-6'>Weight Loss</span>
        <input type="checkbox" className="h-4 w-4 p-1" name="" id="" />
      </div>
      <div className="choice h-10 rounded-xl text-black  w-full ">
        <span className='pl-6'>Muscle Gain</span>
        <input type="checkbox" className="h-4 w-4 p-1" name="" id="" />
      </div>
      <div className="choice h-10 rounded-xl text-black  w-full ">
        <span className='pl-6'>Flexibility and Mobility</span>
        <input type="checkbox" className="h-4 w-4 p-1" name="" id="" />
      </div>
      <div className="choice h-10 rounded-xl text-black  w-full ">
        <span className='pl-6'>General Fitness</span>
        <input type="checkbox" className="h-4 w-4 p-1" name="" id="" />
      </div>
      <div className="choice h-10 rounded-xl text-black  w-full ">
        <span className='pl-6'>Event - specific training</span>
        <input type="checkbox" className="h-4 w-4 p-1" name="" id="" />
      </div>
      <div className="choice h-10 rounded-xl text-black  w-full ">
        <span className='pl-6'>Mindfulness and Mental Health</span>
        <input type="checkbox" className="h-4 w-4 p-1" name="" id="" />
      </div>
      <div className='mt-auto w-full mb-10 flex center flex-col items-stretch'>
        <Link className='createBtn h-10 rounded-xl flex center text-white' to={'/tracker'}> Confirm</Link>
        <br />
      </div>
    </div>
  )
}
