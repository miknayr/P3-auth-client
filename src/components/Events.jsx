// import { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import axios from 'axios'
import Login from'./Login'
import { useState } from 'react'

<<<<<<< HEAD
export default async function Events  (e) {
    const [eventName, setEventName] = useState('')
    const [location, setLocation] = useState('')
    const [friend, setFriend] = useState('')
    try {
        e.preventDefault()
        const requestBody = { eventName, location, friend }
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/events`, requestBody)
        
    } catch (err){
        console.log(err)        
    }
    return (
        <main>
            <h3 className="new-event-head">Enter a new event</h3>
            <form onSubmit={Events}>
                <div>
                    <input
                    id='event-input'
                    type='text'
                    placeholder='event name'
                    onChange={(e) => setEventName(e.target.value)}
                    value={eventName}
                    />
                    <input
                    id='location-input'
                    type='text'
                    placeholder='event venue'
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                    />
                    <input
                    id='zone-input'
                    type='text'
                    placeholder='zone name'
                    onChange={(e) => setFriend(e.target.value)}
                    value={friend}
                    />
                </div>
                <input type='submit' value='add event' />
            </form>

                </main>
=======
    if (!props.currentUser) return (
        <Redirect 
            to='/' 
            component={ Login } 
            currentUser={ props.currentUser }
        />
    ) 

    return (
        <div className="log-box">
            <div className="event-box">
                <div>2:30pm</div>
                <p>Post-Lunch Check-In</p>
            </div>
            <div className="event-box">
                <div>5:00pm</div>
                <p>VIP Dinner Check-In</p>
            </div>
            <div className="event-box">
                <div>7:30pm</div>
                <p>Rufus Du Sol @Stage 7!!</p>
            </div>
        </div>
>>>>>>> af10948c02f3deac515d2111172583ca1a6ee361
    )
    }