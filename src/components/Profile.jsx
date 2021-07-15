import { useState, useEffect } from "react"
import { Redirect, useLocation } from 'react-router-dom'
import axios from 'axios'
import Login from'./Login'

export default function Profile(props) {
    const [location, setLocation] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/profile/${props.currentUser.id}`)
        .then(response => {
            setLocation(response.data.location)
            console.log(location)
        })
        .catch(err => console.log(err))
    },[])

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
            <h2 className="component-header">Profile</h2>
            <h4>Hello, {props.currentUser.name}!</h4>
            <hr/>
        </div>
    )
}