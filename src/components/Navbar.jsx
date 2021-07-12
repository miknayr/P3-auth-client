import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const loggedIn = (
        <>
            <div className="navbar-nav">
                <div class="nav-item">
                    <Link to="/profile" className="nav-link">
                        Profile
                    </Link>
                </div>
            </div>
            <div className="navbar-nav">
                <div class="nav-item">
                    <Link to="/friends" className="nav-link">
                        Friends
                    </Link>
                </div>
            </div>
            <div className="navbar-nav">
                <div class="nav-item">
                    <Link to="/map" className="nav-link">
                        Map
                    </Link>
                </div>
            </div>
            <div className="navbar-nav">
                <div class="nav-item">
                    <Link to="/" className="nav-link">
                        <span onClick={props.handleLogout}>Logout!</span>
                    </Link>
                </div>
            </div>
        </>
    )

    // if user is logged out
    const loggedOut = (
        <>
            <div className="navbar-nav">
                <div class="nav-item">
                    <Link to="/" className="nav-link">
                        Login!
                    </Link>
                </div>
            </div>
            <div className="navbar-nav">
                <div class="nav-item">
                    <Link to="/register" className="nav-link">
                        New account
                    </Link>
                </div>
            </div>
        </>
    )
    return (
        <div className="container">
            <nav className="justify-content navbar navbar-expand bg-dark fixed-top navbar-dark">
                {props.currentUser ? loggedIn : loggedOut}
            </nav>
        </div>
    )
}