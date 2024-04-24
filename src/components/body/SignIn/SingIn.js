import React from 'react'
import './SignIn.css'
import fb from '../../../asset/facebook.png'
import google from '../../../asset/google.png';
import { Link } from 'react-router-dom';
export const SingIn = () => {
    return (
        <div className='m-5 mt-10 flex   flex-col h-full'>
            <div className='text-xl font-bold mb-10 '>Create an account</div>
            <input type="text" placeholder='first name' />
            <input type="text" placeholder='last name' />
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Password' />
            <div className='flex  items-center text-sm'>
                <input type="checkbox" className='h-4 w-4 m-0 mr-1' name="rules_agree" id="rules" />By proceeding, I agree to all <span className='underline pl-1 pr-1  text-blue-800' >T&C</span>  and <span className='underline pl-1  text-blue-800' >Privacy Policy</span>
            </div>
            <div className='mt-auto mb-10 flex center flex-col items-stretch'>
                <Link className='createBtn h-10 rounded-xl flex center text-white' to={'/login'}> Create an account</Link>
                <div className='relative flex flex-col center'>
                    <br />
                    <hr className='w-full border-black' />
                    <br />
                    <span className='absolute w-10 text-center bg-white m-auto top-3'>or</span>
                </div>
                <div className="logo flex  justify-center gap-6 center">
                    <div className=' w-12 h-12 border-2 rounded-lg border-black flex center'>
                        <img src={google} alt="" />
                    </div>
                    <div className=' w-12 h-12 border-2 rounded-lg border-black flex center'>
                        <img src={fb} alt="" />
                    </div>
                </div>

                <div className='flex text-sm center m-5'>
                    Already have an account? <Link className='underline pl-1  text-blue-800' to={'/login'}>Login</Link>
                </div>
            </div>
        </div>
    )
}