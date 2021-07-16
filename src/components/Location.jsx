import { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import axios from 'axios'
import Login from'./Login'

export const Location = (props) => {
    const [localInfo] = useState(props.location.localInfo.data)
    const [myFriends, setMyFriends] = useState([])

    // SET USER'S FRIENDS WITH BACKEND DATA - - - - - - - - - - - - - - - -
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/friends/${props.currentUser.id}`)
            .then(response => {
                setMyFriends(response.data.friends.map(e => e._id))
            })
            .catch(err => console.log(err))
    }, [myFriends, props.currentUser.id])

    // GENERATE CURRENT LOCATION'S USERS DISPLAY - - - - - - - - - - - - - - - -
    let myUsers = localInfo.user.map(user => {
        if (myFriends.includes(user._id)) {
            return (
                <div className="event-box">
                    <div className="friend-icon fas fa-heart" />
                    <h6 className="no-friend-text text-danger">{user.name}</h6>
                </div>
            )
        } else {
            return (
                <div className="event-box">
                    <div className="friend-icon fas fa-user" />
                    <h6 className="no-friend-text">{user.name}</h6>
                </div>
            )
        }
    })

    // GENERATE NO USER DISPLAY - - - - - - - - - - - - - - - -
    let noUsers = (
        <div className="event-box">
            <div className="friend-icon fas fa-sad-tear"/>
            <h6 className="no-user-text">Nobody Here But Us Chickens!</h6>
        </div>
    )

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
            <hr/>
            <h5>Current Users: {localInfo.user.length}</h5>
            <hr/>
            <div className="log-box height-mod">
                {localInfo.user.length > 0 ? myUsers : noUsers}
            </div>
        </div>
    )
}