// import { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Login from'./Login'
import { useState } from 'react'
export default function Events(props) {

    return (

        <main>
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
        </main>

    )
}