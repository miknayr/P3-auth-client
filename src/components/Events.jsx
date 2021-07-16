import { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Login from'./Login'

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

        }}
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/events/${props.currentUser.id}`)
        .then((response) => {
            setEvents(response.data.events)
            console.log(events)
        })
    })

    
    // GENERATE FRONTEND EVENTS DISPLAY - - - - - - - - - - - - - - - -
    let myEvents = events.map(e => {
        return (
            <div className="event-box">
                <div className="friend-icon fas fa-exclamation"/>
                <h6>{e.name}</h6>

                <h3 className="new-event-head">Enter a new event</h3>
                <form onSubmit={(e) => handleSubmit(e)}>
                  </form>
            </div>
            
        )
    })

    // GENERATE NO EVENTS DISPLAY
    let noEvents = (
        <div className="event-box">
            <div className="friend-icon fas fa-sad-tear"/>
            <h6 className="no-friend-text">Get a Life!</h6>
        </div>
    )

    // REDIRECT ON USER ERROR - - - - - - - - - - - - - - - -
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

            <div className="log-box height-mod">

                
                   {events.map((item) => {
                      return (
                          <p>{item.eventName}</p>
                      )
                  })} 
             
              </div>

                {/* {events.length > 0 ? myEvents : noEvents} */}
          </div>
        

        
    )}