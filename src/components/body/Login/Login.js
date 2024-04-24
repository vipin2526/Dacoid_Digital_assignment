import React from 'react'
import fb from '../../../asset/facebook.png'
import google from '../../../asset/google.png';
import { Link } from 'react-router-dom';
export const Login = () => {
    return (
        <div className='m-5 mt-10 flex  flex-col h-full'>
            <div className='text-xl font-bold mb-10'>Welcome Back</div>
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Password' />
            <div className='flex  items-center text-sm underline'>
                Forgot your password?
            </div>
            <div className='mt-auto mb-10 flex center flex-col items-stretch'>
                <Link className='createBtn h-10 rounded-xl flex center text-white' to={'/goals'}> Sign In</Link>
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
                    Don’t have an account yet?  <Link className='underline pl-1  text-blue-800' to={'/signIn'}>Create an account</Link>
                </div>
            </div>
        </div>
    )
}