import { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Login from'./Login'

export const Map = (props) => {
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
                Hello from Map!
            </h1>
        </div>
    )
}