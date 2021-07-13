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
        <div>
            <h1>
                Hello from Events!
            </h1>
        </div>
    )
}