import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav>
      <Link to="/">
        Home
      </Link>

      <Link to="/profile">
        Profile
      </Link>

      
      <Link to="/">
        <span onClick={props.handleLogout}>LogOut!</span>
      </Link>

      <Link to="/login">
        Login!
      </Link>

      <Link to="/register">
        New account
      </Link>




    </nav>
  )
}