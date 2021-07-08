import './App.css';
import Login from './components/Login.jsx'
import Navbar from './components/Navbar.jsx'
import Profile from './components/Profile.jsx'
import Register from './components/Register.jsx'
import Welcome from './components/Welcome.jsx'

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
    // delete the jwt thats in local storage
    if(localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken')
      setCurrentUser(null)
    }

    // set the user in the state to be null


    console.log('log the user out!')
  }


  return (
    <Router>
      <header>
        <Navbar  currentUser={ currentUser } handleLogout={ handleLogout } />
      </header>



      <div className="App">
        <Switch>

          <Route 
            exact path ="/"
            component={Welcome}
          />

          <Route 
            path="/register"
            render={props => <Register {...props} currentUser={ currentUser } setCurrentUser={setCurrentUser} /> }
          />    
          <Route 
            path="/login"
            render={props => <Login {...props}  currentUser={ currentUser } setCurrentUser={setCurrentUser} /> }
          />    

          {/* eventually we will do a conditional render here */}
          <Route 
            path="/profile"
            render={props => currentUser ? <Profile {...props}  currentUser={ currentUser } handleLogout={handleLogout} /> : <Redirect to='/login'/>}
          />    
          
          
          
        
        </Switch>     

      </div>
    </Router>
  );
}

export default App;
