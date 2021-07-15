import { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import axios from 'axios'
import Login from'./Login'

export const Location = (props) => {
    const [localInfo, setLocalInfo] = useState(props.location.localInfo.data)
    // MAP FRIENDS FROM LOCALINFO
    let friendList = localInfo.friends.map(e => {
        return (
            <div className="event-box">
                {e.name}
            </div>
        )
    })
    // REDIRECT ON USER ERROR
    if (!props.currentUser) return (
        <Redirect 
            to='/' 
            component={ Login } 
            currentUser={ props.currentUser }
        />
    ) 
    // RETURN
    return (
        <div>
            <h2 className="component-header">{localInfo.name}</h2>
            <div className="log-box">
                
            </div>
        </div>
    )
}