import React from 'react'
import value from '../../../asset/Value.png'
import alert from '../../../asset/alert-triangle.png'
import img53 from '../../../asset/Ellipse 53.png'
import img54 from '../../../asset/Ellipse 54.png'
import img55 from '../../../asset/Ellipse 55.png'
import m1 from '../../../asset/m1.png'
import m2 from '../../../asset/m2.png'
import m3 from '../../../asset/m3.png'
import m4 from '../../../asset/m4.png'
import m5 from '../../../asset/m5.png'
import './Tracker.css'
export const Tracker = () => {
    return (
        <div className='m-5 flex flex-col h-full center gap-6 '>
            <div className='text-xl font-bold text-center'>Workout Tracker</div>
            <img src={value} alt="image not found" />
            <div className="warning h-10 rounded-xl px-3 text-black  w-full flex center">
                <img src={alert} className="inline-block" alt="not found" />
                <div className='pl-2 text-sm space-y-0'> <span >You've burned fewer calories than yesterday. Time to get moving! </span></div>
            </div>
            <div className=" text-black  w-full flex">
                <span className='font-bold text-lg'>Upcoming Workout</span>
                <span className="ml-auto">See more</span>
            </div>
            <div className="serviceBox h-20 rounded-xl px-3 text-black  w-full flex center">
                <img src={img53} className="inline-block rounded-full " alt="not found" />
                <div className='pl-2 flex-1'> <div>Full Body Workout</div> <span className=' text-sm'>Today 3pm</span>
                </div>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
            </div>
            <div className="serviceBox h-20 rounded-xl px-3 text-black  w-full flex center">
                <img src={img54} className="inline-block rounded-full " alt="not found" />
                <div className='pl-2 flex-1'> <div>Upper Body Workout</div> <span className=' text-sm'>4 Feb, 3:30 pm</span>
                </div>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
            </div>
            <div className=" text-black  w-full flex">
                <span className='font-bold text-lg'>What Do You Want to Train</span>
            </div>
            <div className="workoutCard rounded-xl px-3 text-black  w-full flex center">
                <div className='pl-2 flex-1'>
                    <div>Full Body Workout</div>
                    <div className=' text-sm'>Arms</div>
                    <div className=' text-sm'>Chest</div>
                </div>
                <img src={img55} className="inline-block rounded-full  h-100 w-100" alt="not found" />
            </div>
            <div className="menuBox h-20 text-black  w-full flex center absolute gap-8">
                <div className='rounded-full  '>
                    <img src={m1} className="inline-block" alt="not found" />
                </div>
                <div className='rounded-full  '>
                    <img src={m2} className="inline-block " alt="not found" />
                </div>
                <div className=' rounded-full  spaceBtn '>
                    <img src={m3} className="inline-block " alt="not found" />
                </div>

                <div className=' rounded-full   '>
                    <img src={m4} className="inline-block " alt="not found" />
                </div>
                <div className=' rounded-full  '>
                    <img src={m5} className="inline-block " alt="not found"  />
                </div>


            </div>
        </div>
    )
}
