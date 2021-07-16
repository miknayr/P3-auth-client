import { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'
// do i need jwt token
// import jwt from 'jsonwebtoken'
import axios from 'axios'
import Login from'./Login'
// import { useState } from 'react'

export default function Events  (props) {
    const [events, setEvents] = useState([])
    // set to app level pass down to events?
    const [eventName, setEventName] = useState('')
    const [location, setLocation] = useState('')
    const [friend, setFriend] = useState('')
    // useEffect, maybe higher app level
    // seems to be submitting without useEffect?
    // trying to get db to create
    async function handleSubmit(e) {
        try {
            e.preventDefault()
            const requestBody = { eventName, location, friend }
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/events/${props.currentUser.id}`, requestBody)   
        } catch (err){
            console.log(err)        
        }}
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/events/${props.currentUser.id}`)
        .then((response) => {
            setEvents(response.data.events)
            console.log(events)
        })
    })
    let myEvents = events.map(e => {
        return(
            <div>
                <h6>{e.name}</h6>
            </div>
        )
    })
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
                    id='meetup-title'
                    type='text'
                    placeholder='meetup title'
                    onChange={(e) => setEventName(e.target.value)}
                    value={eventName}
                    />
                    <input
                    id='location-input'
                    type='text'
                    placeholder='meetup location'
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                    />
                    <input
                    id='friends-input'
                    type='text'
                    placeholder='ping friends'
                    onChange={(e) => setFriend(e.target.value)}
                    value={friend}
                    />
                </div>
                <input type='submit' value='add event' />
            </form>
            <h5>Upcoming Events</h5>
                <div>{myEvents}</div>
                </div>
    )}