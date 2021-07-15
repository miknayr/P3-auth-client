import { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'
// do i need jwt token
import jwt from 'jsonwebtoken'
import axios from 'axios'
import Login from'./Login'
// import { useState } from 'react'

export default function Events  (props) {
    // set to app level pass down to events
    const [eventName, setEventName] = useState('')
    const [location, setLocation] = useState('')
    const [friend, setFriend] = useState('')
    // useEffect, maybe higher app level
    async function handleSubmit(e) {
        try {
            e.preventDefault()
            const requestBody = { eventName, location, friend }
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/events/${props.currentUser.name}`, requestBody)
            console.log(response.data)
            
        } catch (err){
            console.log(err)        
        }
    }
    if (!props.currentUser) return (
        <Redirect 
            to="/"
            component={ Login }
            currentUser={ props.currentUser }
        />
    )
    return (
        <div>
            <h3 className="new-event-head">Enter a new event</h3>
            <form onSubmit={handleSubmit}>
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
                    placeholder='friends'
                    onChange={(e) => setFriend(e.target.value)}
                    value={friend}
                    />
                </div>
                <input type='submit' value='add event' />
            </form>

                </div>
    )
}