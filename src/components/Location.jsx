import { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import axios from 'axios'
import Login from'./Login'

export const Location = (props) => {
    const [localInfo, setLocalInfo] = useState(props.location.localInfo.data)

    console.log(localInfo)

    if (!props.currentUser) return (
        <Redirect 
            to='/' 
            component={ Login } 
            currentUser={ props.currentUser }
        />
    ) 

    return (
        <div>
            Hello from {localInfo.name}!
        </div>
    )
}