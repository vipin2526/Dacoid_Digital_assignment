import React from 'react'
import './Body.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Track } from './Track/Track'
import { Burn } from './Burn/Burn'
import { SingIn } from './SignIn/SingIn'
import { Login } from './Login/Login'
import { Goal } from './Goals/Goal'
import { Tracker } from './Tracker/Tracker'
import { Cal } from './Calender/Cal'


export const Body = () => {
    return (
        <Router>
            <div className='body border-1 bg-white rounded relative'>
                <Routes>
                    <Route path='/' element={<Track />} />
                    <Route path='/burn' element={<Burn />}/>
                    <Route path='/signIn' element={<SingIn />}/>
                    <Route path='/logIn' element={<Login />}/>
                    <Route path='/goals' element={ <Goal />  }/>
                    <Route path='/tracker' element={ <Tracker />  }/>
                    <Route path='/calender' element={ <Cal />  }/>
                </Routes> 
                </div>
        </Router>

    )
}
