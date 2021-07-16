import { useState, useEffect } from "react"
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import Login from './Login'

export default function Profile(props) {
    const [placeName, setPlaceName] = useState([])
    const [location, setLocation] = useState([])

    // SET CURRENT USER LOCATION  - - - - - - - - - - - - - - - - 
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/profile/${props.currentUser.id}`)
        .then(response => {
            if (response.data.location[0] === undefined) {
                setLocation("Unknown")
            } else {
                setLocation(response.data.location[0]) 
            }
        })
        .catch(err => console.log(err))

    },[location, props.currentUser.id])


    // UPDATE CURRENT USER LOCATION  - - - - - - - - - - - - - - - - 
    const updateLocation = async (e) => {
        try {
            e.preventDefault()
            const requestBody = { placeName }
            await axios.put(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/profile/${props.currentUser.id}`, requestBody)
                .then(res => { console.log(res) })
                .catch(err => { console.log(err) })
        } catch (err) { console.log(err) }
    }

    // REDIRECT ON USER ERROR - - - - - - - - - - - - - - - - 
    if (!props.currentUser) return (
        <Redirect 
            to='/' 
            component={ Login } 
            currentUser={ props.currentUser }
        />
    ) 

    // RETURN - - - - - - - - - - - - - - - - 
    return (
        <div>
            <Link to={{
                    pathname:'/deleteprofile'
                }}>
                <h5 className="delete-text">Delete</h5>
            </Link>
            <h2 className="component-header">Profile</h2>
            <h3 className="new-event-head">Hello, {props.currentUser.name}!</h3>
            <hr/>
            <form className="log-box" onSubmit={updateLocation}>
                <label > Where are you </label>
                <select className="location-label" value={placeName} onChange={e => setPlaceName(e.target.value)}>
                    <option value="Barn">Barn</option>
                    <option value="Stage">Stage</option>
                    <option value="Sahara">Sahara</option>
                </select>
                <input
                    type='submit'
                    value='Update'
                    className="btn login-input text-center"
                />
            </form>
            {/* <form className="log-box" onSubmit={updateLocation}>
                <input
                    type="text"
                    placeholder="Where Are You?"
                    onChange={e => setPlaceName(e.target.value)}
                    value={placeName}
                    className="login-input"
                />
                <input
                    type='submit'
                    value='Update'
                    className="btn login-input text-center"
                />
            </form> */}
            <hr/>
            <h5>Your Location</h5>
            <div className="log-box">
                <div className="event-box">
                    <div className="friend-icon fas fa-map-marker-alt"/>
                    <h6 className="location-text">{location.name}</h6>
                </div>
            </div>
        </div>
    )
}