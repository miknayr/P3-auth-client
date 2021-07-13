// import { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'
import Login from'./Login'

export const Events = (props) => {
    if (!props.currentUser) return (
        <Redirect 
            to='/' 
            component={ Login } 
            currentUser={ props.currentUser } 
        />
    )

    return (
        <div>
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