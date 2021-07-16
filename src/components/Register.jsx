import { useState } from "react"
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { Redirect, Link } from 'react-router-dom'
import Home from './Home'

const Register = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    // REGISTER/LOGIN NEW USER  - - - - - - - - - - - - - - - -
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
                console.dir(message)
            } else {
                console.dir(error)
            }
        }
    }

    // REDIRECT ON USER ERROR  - - - - - - - - - - - - - - - -
    if (props.currentUser) return (
        <Redirect 
            to='/home' 
            component={ Home } 
            currentUser = { props.currentUser } 
        />
    )
    
    // RETURN  - - - - - - - - - - - - - - - -
    return (
        <div className="log-box">
            <div className="header-box">
                <div className="text-box">
                    <h2 className="log-header">TOTEMIZE</h2>
                    <div className="h6-box">
                        <h6 className="h6-header">GET REGISTERED</h6>
                    </div>
                </div>
            </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type='text'
                            placeholder='Name'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className="login-input"
                            required
                        />
                        <input
                            type='email'
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="login-input"
                            required
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="login-input"
                            required
                        />
                    </div>
                    <input type='submit' value='Register' className="btn login-input"/>
                </form>
                <Link to="/">
                    <p className="tiny-text">
                        Go Back
                    </p>
                </Link>
        </div>
    )
}
export default Register