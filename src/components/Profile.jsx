import { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Login from'./Login'

export default function Profile(props) {

    if (!props.currentUser) return (
        <Redirect 
            to='/' 
            component={ Login } 
            currentUser={ props.currentUser }
        />
    ) 

    return (
        <div>
            <h1>Hello from Profile</h1>
            <p>{props.currentUser.name}</p>
            <p>{props.currentUser.email}</p>
            <p>{props.currentUser.friends}</p>
        </div>
    )
}