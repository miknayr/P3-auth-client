// import { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Login from'./Login'
import { useState } from 'react'
export default function Events(props) {
    const [eventName, setEventName] = useState('')
    const [location, setLocation] = useState('')
    const [zoneList, setZoneList] = useState('')

    const addEvent = async (e) => {
        try {
            e.preventDefault()
            const requestBody = { eventName, location, zoneList }
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/events`, requestBody)

    } catch (err){
        console.log(err)        
    }}
    return (
        <div className="new-event">
            <h3 className="new-event-head">Enter a new event</h3>
            <form onSubmit={addEvent}>
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
                    placeholder='event name'
                    onChange={(e) => setZoneList(e.target.value)}
                    value={zoneList}
                    />
                </div>
            </form>
            <ul>
                <li>Code-Chella</li>
                <li>EDC</li>
                <li>Life is Beautiful</li>
                <li>Day N Vegas</li>
                <li>iHeartRadio Music Festival</li>
                <li>Beyond Wonderland</li>
            </ul>
        </div>
    )
}