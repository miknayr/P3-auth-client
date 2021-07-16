import { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'
// do i need jwt token
// import jwt from 'jsonwebtoken'
import axios from 'axios'
import Login from'./Login'
// import { useState } from 'rea3ct'

export default function Events(props) {
    const [events, setEvents] = useState([])
    // set to app level pass down to events?
    const [eventName, setEventName] = useState('')
    const [location, setLocation] = useState('')
    const [friend, setFriend] = useState('')

    useEffect(() => {
        // make axios request to get currentuser events 
        async function runRequest(){
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/events/${props.currentUser.id}`)
            setEvents(response.data.events)
        }
        runRequest()
        // update value of events to be currentUser events
    }, [events])
    // useEffect, maybe higher app level
    // seems to be submitting without useEffect?
    // trying to get db to create
    function handleSubmit(e) {
        e.preventDefault()
        try {
            const requestBody = { eventName, location, friend }
            console.log(requestBody)
            async function run() { 
                console.log('this ran')
                const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/events/${props.currentUser.id}`, requestBody)   
                setEvents(response.data.events)
            }
            run()
            // responseData = Promise.all(run())
        } catch (err){
            console.log(err)        
        }
        // console.log(responseData)
    }
    // if (!props.currentUser) {return (
    //     <Redirect 
    //         to="/"
    //         component={ Login }
    //         currentUser={ props.currentUser }
    //     />
    // )}
    return (
        <div>
            <h3 className="new-event-head">Enter a new event</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
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
                <input type='submit' value='add event'  />
            </form>
            <h5>Upcoming Events</h5>
                <div>{events.map((item) => {
                    return (
                        <p>{item.eventName}</p>
                    )
                })} 
                </div>
                </div>
    )}