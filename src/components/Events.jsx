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
        <main>
            <ul>
                <li>
                    <div>
                      <input type="checkbox"/>
                         Adriana is at 8
                     </div>
                </li>
                <li>Terry is at 8</li>
                <li>Life is Beautiful</li>
                <li>Day N Vegas</li>
                <li>iHeartRadio Music Festival</li>
                <li>Beyond Wonderland</li>
            </ul>
        </main>
    )
}