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
            <u>
                Hello from Map!
            </u>
        </div>
    )
}