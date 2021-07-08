import './App.css';
import Login from './components/Login.jsx'
import Navbar from './components/Navbar.jsx'
import Profile from './components/Profile.jsx'
import Register from './components/Register.jsx'
import Welcome from './components/Welcome.jsx'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>



      <div className="App">
        <Switch>

          <Route 
            exact path ="/"
            component={Welcome}
          />

          <Route 
            path="/register"
            render={props => <Register {...props} /> }
          />    
          <Route 
            path="/login"
            render={props => <Login {...props} /> }
          />    

          {/* eventually we will do a conditional render here */}
          <Route 
            path="/profile"
            render={props => <Profile {...props} /> }
          />    
          
          
          
        
        </Switch>     

      </div>
    </Router>
  );
}

export default App;
