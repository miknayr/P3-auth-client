import { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Login from'./Login'

export default function Friends(props) {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    // handleSubmit function
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const requestBody = { name }
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/friends/${props.currentUser.id}`, requestBody)
            console.log(response.data)
            props.history.push('/profile', response.data.currentUser)
        } catch (error) {
            if(error.response.status === 400){
                setMessage('Your friend is not registered')
                console.dir(message)
            } else {
                console.dir(error)
            }
        }
    }
    
    // hit the auth locked route on the backend
    useEffect(() => {
        const getPrivateMessage = async () => {
            try {
                const token = localStorage.getItem('jwtToken')
                const authHeaders = { Authorization: token }
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`, {headers: authHeaders})
                console.log(response.data)
            } catch(err) {
                console.log(err)
                props.handleLogout()
            }
        }
        // getPrivateMessage()    
    }, [props])


    if (!props.currentUser) return(
        <Redirect 
            to='/login' 
            component={Login} 
            currentUser={ props.currentUser }
        />
    )
  
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <p>{message}</p>
                <input
                    id='name-input'
                    type='text'
                    placeholder='Enter your friends name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
            </div>
            <input
                type='submit'
                value='Add'
                className="btn login-input"
            />
        </form>
    )
}