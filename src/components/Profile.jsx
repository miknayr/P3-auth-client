import { useState, useEffect } from "react"
import { Redirect, useLocation } from 'react-router-dom'
import axios from 'axios'
import Login from'./Login'

export default function Profile(props) {
    const [placeName, setPlaceName] = useState([])
    const [location, setLocation] = useState([])


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/profile/${props.currentUser.id}`)
        .then(response => {
            setLocation(response.data.location[0])
            console.log(location)
        })
        .catch(err => console.log(err))
    },[])


    const updateLocation = async (e) => {
        try {
            e.preventDefault()
            const requestBody = { placeName }
            await axios.put(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/profile/${props.currentUser.id}`, requestBody)
            .then(res => {
                console.log(res)
          
            })
            
            .catch(err => {
                console.log(err)
            })
        } catch (err) {
            console.log(err)
        }
    }

    
    // REDIRECT ON USER ERROR
    if (!props.currentUser) return (
        <Redirect 
            to='/' 
            component={ Login } 
            currentUser={ props.currentUser }
        />
    ) 
    // if (refresh === true) return (
    //   <Redirect
    //     to='/profile'
    //     component={ Profile }
    //   />
    // )

    // RETURN
    return (

        <div>
            <h2 className="component-header">Profile</h2>
            <h4>Hello, {props.currentUser.name}!</h4>
            <p>{location.name}</p>
            <hr/>

            <form onSubmit={updateLocation}>
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
            </form>

        </div>
    )
}