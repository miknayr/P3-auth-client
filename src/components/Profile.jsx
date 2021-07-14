import { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Login from'./Login'

export default function Profile(props) {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/profile/${props.currentUser.id}`)
        .then((response) => {
            setFriends(response.data.friends)
            console.log(friends)
        })
        .catch((err) => console.log(err))
    },[])

    let myFriends = friends.map(e => {
        return (
            <ul>
                <li>
                    {e.name}
                </li>
            </ul>
        )
    })

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
            {myFriends}
        </div>
    )
}