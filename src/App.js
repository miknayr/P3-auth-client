import './App.css';
import Login from './components/Login.jsx'
import Navbar from './components/Navbar.jsx'
import Profile from './components/Profile.jsx'
import Register from './components/Register.jsx'
import Friends from './components/Friends.jsx'
import Events from './components/Events'



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
    if(token) {
        setCurrentUser(jwt.decode(token))
    } else {
        // else set user in state to be null
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
            <Navbar  currentUser={ currentUser } handleLogout={ handleLogout } />
            <div className="App">
                <Switch>
                    <Route 
                        exact path="/"
                        render={props => <Login {...props}  currentUser={ currentUser } setCurrentUser={setCurrentUser} /> }
                    />    
                    <Route 
                        path="/register"
                        render={props => <Register {...props} currentUser={ currentUser } setCurrentUser={setCurrentUser} /> }
                    />    
                    <Route 
                        path="/profile"
                        render={props => currentUser ? <Profile {...props}  currentUser={ currentUser } handleLogout={handleLogout} /> : <Redirect to='/login'/>}
                    />    
                    <Route 
                        path="/friends"
                        render={props => currentUser ? <Friends {...props}  currentUser={ currentUser } handleLogout={handleLogout} /> : <Redirect to='/login'/>}
                    />    
                    <Route 
                        path="/events"
                        render={props => currentUser ? <Events {...props}  currentUser={ currentUser } handleLogout={handleLogout} /> : <Redirect to='/login'/>}
                    />    
                </Switch>     
            </div>
        </Router>
    );
}

export default App;
