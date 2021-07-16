import { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import axios from 'axios'
import Login from'./Login'

export const Location = (props) => {
    const [localInfo, setLocalInfo] = useState(props.location.localInfo.data)

    // REDIRECT ON USER ERROR  - - - - - - - - - - - - - - - -
    if (!props.currentUser) return (
        <Redirect 
            to='/' 
            component={ Login } 
            currentUser={ props.currentUser }
        />
    ) 
    
    // RETURN  - - - - - - - - - - - - - - - -
    return (
        <div>
            <h2 className="component-header">{localInfo.name}</h2>
            <div className="log-box">
            </div>
        </div>
    )
}