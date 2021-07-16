import { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Login from'./Login'

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
            <h2 className="component-header">Events</h2>
            <h3 className="new-event-head">Enter a New Event</h3>
            <hr/>
            <form className="log-box" onSubmit={handleSubmit}>
                <div>
                    <input
                        className="login-input"
                        type='text'
                        placeholder='What?'
                        onChange={(e) => setEventName(e.target.value)}
                        value={eventName}
                    />
                    <input
                        className="login-input"
                        type='text'
                        placeholder='Where?'
                        onChange={(e) => setLocation(e.target.value)}
                        value={location}
                    />
                    <input
                        className="login-input"
                        type='text'
                        placeholder='Who?'
                        onChange={(e) => setFriend(e.target.value)}
                        value={friend}
                    />
                </div>
                <input 
                    className="btn login-input"
                    type='submit' 
                    value='add event'
                />
            </form>
            <hr/>
            <h5>Upcoming Events</h5>
                <div>{myEvents}</div>
                </div>
    )}