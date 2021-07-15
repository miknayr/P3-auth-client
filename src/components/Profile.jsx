import { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Login from'./Login'

export default function Profile(props) {
    const [friends, setFriends] = useState([])
    // SET FRIENDS WITH BACKEND DATA
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/profile/${props.currentUser.id}`)
        .then(response => {
            setFriends(response.data.friends)
        })
        .catch(err => console.log(err))
    },[])
    // GENERATE FRONTEND FRIENDS DISPLAY
    let myFriends = friends.map(e => {
        return (
            <div className="friend-box">
                <div className="friend-icon fas fa-user"/>
                <h6>{e.name}</h6>
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
            <h2 className="component-header">Profile</h2>
            <h4>Hello, {props.currentUser.name}!</h4>
            <hr/>
            <h4>Your Friends</h4>
            <div className="log-box">
                <div></div>
                {myFriends}
            </div>
        </div>
    )
}