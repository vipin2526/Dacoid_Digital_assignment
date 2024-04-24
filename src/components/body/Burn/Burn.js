import React from 'react'
import burn from '../../../asset/burn.png'
import vector from '../../../asset/Vector.png'
import { Link } from 'react-router-dom'

export const Burn = () => {
  return (
    <div className='flex flex-col m-5 h-full '>
        <Link to={'/signIn'} className=' text-right text-blue-800 text-lg underline'>skip</Link>
        <img className='m-10 mt-20' src={burn} alt=" not found" />
        <h1 className='text-2xl bold font-bold mt-20'>Get Burn</h1>
        <span>Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever</span>

        <Link to={'/signIn'} className='h-10 w-10 border  rounded-full mt-auto mb-10 ml-auto nextBtn flex center'><img src={vector} alt="not found" /></Link>
    </div>
  )
}
