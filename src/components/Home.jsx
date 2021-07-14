import { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'

import axios from 'axios'
import Login from'./Login'

export default function Home(props) {
    const [message, setMessage] = useState('')
    const [friends, setFriends] = useState([])

    useEffect(() => {
        const getPrivateMessage = async () => {
        try {
            const token = localStorage.getItem('jwtToken')
            const authHeaders = { Authorization: token }
            const response = await axios.get(
                `${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`,
                { headers: authHeaders }
            )
            setMessage(response.data.msg)
            } catch (err) {
                props.handleLogout()
            }
        }
        getPrivateMessage()    
    },[props])

    useEffect(() => {
        console.log(props.currentUser.id, "PROPS CURRENT")
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/friends/${props.currentUser.id}`) // <--- change to what jackie makes for backend get-route
        .then((response) => {
            console.log("RESPONSE DATA",response.data.results)
            setFriends(response.data.results)
        })
        .catch((err) => console.log(err))
    }, [])

    if (!props.currentUser) return (
        <Redirect 
            to='/' 
            component={ Login } 
            currentUser={ props.currentUser }
        />
    ) 
    
    return (
        <div className="map-box">
            <img src='/code-chella-map.png' alt="map"/>
        </div>
    )
}