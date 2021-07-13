import { useState } from "react"
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { Redirect } from 'react-router-dom'
import Profile from './Profile'
const Register = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            // 1. make request body
            const requestBody = { name, email, password }
            // 2. post request body to server
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/register`, requestBody)
            // 3. destructure token from response
            const { token } = response.data
            // 4. set token in local storage
            localStorage.setItem('jwtToken', token)
            // 5. decode token
            const decoded = jwt.decode(token)
            // 6. set user in App.js state
            props.setCurrentUser(decoded)

        } catch (error) {
            if (error.response.status === 400) {
                setMessage(error.response.data.msg)
            } else {
                console.log(error)
            }
        }
    }

    if (props.currentUser) return (
        <Redirect 
            to='/profile' 
            component={ Profile } 
            currentUser = { props.currentUser } 
        />
    )
    
    return (
        <div className="log-box">
            <h3 className="log-header">Register for an Account</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        id='name-input'
                        type='text'
                        placeholder='Enter your name'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <input
                        id='email-input'
                        type='email'
                        placeholder='Enter your email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        id='password-input'
                        type='password'
                        placeholder='********'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <input type='submit' value='Register'/>
            </form>
        </div>
    )
}
export default Register