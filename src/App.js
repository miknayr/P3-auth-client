import './App.css';
import Login from './components/Login.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Profile from './components/Profile'
import Register from './components/Register.jsx'
import Friends from './components/Friends.jsx'
import Events from './components/Events'
import { Location } from './components/Location'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import {
    useState,
    useEffect
} from 'react'

import jwt from 'jsonwebtoken'

function App() {
    // state holds user data if the user is logged in
    const [currentUser, setCurrentUser] = useState(null)

    // if navigates away automatically log them in
    useEffect(() => {
        // get the token from local storage
        const token = localStorage.getItem('jwtToken')
        //if check for token
        if (token) {
            setCurrentUser(jwt.decode(token))
        } else {
            setCurrentUser(null)
        }
    }, [])

  // function to log the user out
    const handleLogout = () => {
        if (localStorage.getItem('jwtToken')) {
            localStorage.removeItem('jwtToken')
            setCurrentUser(null)
        }
    }

    return (
        <Router>
            <main>
                <Navbar  currentUser={ currentUser } handleLogout={ handleLogout } />
                <Switch>
                    <Route 
                        exact path="/"
                        render={props => 
                            <Login {...props}  
                                currentUser={ currentUser } 
                                setCurrentUser={setCurrentUser} 
                            />
                        }
                    />    
                    <Route 
                        path="/register"
                        render={props => 
                            <Register {...props} 
                                currentUser={ currentUser } 
                                setCurrentUser={setCurrentUser} 
                            />
                        }
                    />
                    <Route 
                        path="/home"
                        render={props => 
                            currentUser ? <Home {...props}  
                                currentUser={ currentUser } 
                                handleLogout={handleLogout} 
                            /> : <Redirect to='/'/>
                        }
                    />
                    <Route
                        path="/location"
                        render={props => 
                            currentUser ? <Location {...props}  
                                currentUser={ currentUser } 
                                handleLogout={handleLogout} 
                            /> : <Redirect to='/'/>
                        }
                    />
                    <Route 
                        path="/profile"
                        render={props =>
                            currentUser ? <Profile {...props}  
                                currentUser={ currentUser } 
                                handleLogout={handleLogout} 
                            /> : <Redirect to='/'/>
                        }
                    />
                    <Route 
                        path="/friends"
                        render={props => 
                            currentUser ? <Friends {...props}  
                                currentUser={ currentUser } 
                                handleLogout={handleLogout} 
                            /> : <Redirect to='/'/>
                        }
                    />    
                    <Route 
                        path="/events"
                        render={props => 
                            currentUser ? <Events {...props}  
                                currentUser={ currentUser } 
                                handleLogout={handleLogout} 
                            /> : <Redirect to='/'/>
                        }
                    />    
                </Switch> 
            </main>
        </Router>
    );
}

export default App;
