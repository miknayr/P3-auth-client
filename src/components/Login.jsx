import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import Profile from './Profile'

export default function Login(props) {
// state for the controller from
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const requestBody = {
                email: email,
                password: password
            }
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/login`, requestBody)

            const { token } = response.data
            localStorage.setItem('jwtToken', token)
            const decoded = jwt.decode(token)

            props.setCurrentUser(decoded)
        } catch (err) {
            if (err.response.status === 400) {
                setMessage(err.response.data.msg)
            } else {
                console.dir(err)
            }
        }
    }

    if (props.currentUser) return (
        <Redirect 
            to='/profile' 
            component={ Profile } 
            currentUser={ props.currentUser } 
        />
    ) 

  return (
        <div className="log-box">
            <h3 className="log-header">Login to your Account</h3>
            <p>{message}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        id='email-input'
                        type='email'
                        placeholder='Enter Your Email Here'
                        onChange ={e => setEmail(e.target.value)}
                        value={email}
                        />
                    <input
                        id='password-input'
                        type='password'
                        placeholder='********'
                        onChange = {e => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <input
                    type='submit'
                    value='Login'
                />
            </form>
        </div>
    )
}
