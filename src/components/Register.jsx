import { useState } from "react"
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { Redirect } from 'react-router-dom'
import Profile from './Profile'
const Register = (props) => {
    // state for the controlled form
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // state for the flash message from the server
    const [message, setMessage] = useState('')
    // function to handle form submission
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()

            const requestBody = {
                name: name,
                email: email,
                password: password
            }

            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/register`, requestBody)
            const { token } = response.data
            localStorage.setItem('jwtToken', token)
            const decoded = jwt.decode(token)
            props.setCurrentUser(decoded)

        } catch (error) {
            if(error.response.status === 400) {
                setMessage(error.response.data.msg)
            } else {
                console.log(error)
            }
        }
    }
    // redirect if the user is logged in
    if (props.currentUser) return <Redirect to='/profile' component={ Profile } currentUser = { props.currentUser } />
    
    return (
        <div className="log-box">
            <h3 className="log-header">Register for an Account</h3>
            <p>{message}</p>
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
                <input type='submit' value='Register' />
            </form>
        </div>
    )
}
export default Register