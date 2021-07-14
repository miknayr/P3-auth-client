// import { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'
import Login from'./Login'

export default function Events(props) {
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
    )
}