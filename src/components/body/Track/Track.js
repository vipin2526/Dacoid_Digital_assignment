import React from 'react'
import track from '../../../asset/track.png'
import vector from '../../../asset/Vector.png'
import { Link } from 'react-router-dom'
import './Track.css'

export const Track = () => {
  return (
    <div className='flex flex-col m-5 h-full '>
        <Link to={'/burn'} className=' text-right text-blue-800 text-lg underline'>skip</Link>
        <img src={track} alt="not found"  className='m-10 mt-20'/>
        <h1 className='text-2xl bold font-bold'>Track Your Goal</h1>
        <span>Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals</span>

        <Link to={'/burn'} className='h-10 w-10 border  rounded-full mt-auto mb-10 ml-auto nextBtn flex center' ><img src={vector} alt="not found" /></Link>
    </div>
  )
}
