import { Link } from 'react-router-dom'

export default function Navbar(props) {

    // NAVBAR WHEN LOGGED IN - - - - - - - - - - - - - - - -
    const loggedIn = (
        <>
            <nav className="navbar">
                <div className="navbar-nav">
                    <Link to="/home" className="nav-item">
                        <div className="nav-icon fas fa-map"/>
                        <p>Home</p>
                    </Link>
                </div>
                <div className="navbar-nav">
                    <Link to="/profile" className="nav-item">
                        <div className="nav-icon fas fa-user"/>
                        <p>Profile</p>
                    </Link>
                </div>
                <div className="navbar-nav">
                    <Link to="/friends" className="nav-item">
                        <div className="nav-icon fas fa-user-friends"/>
                        <p>Friends</p>
                    </Link>
                </div>

                <div className="navbar-nav">
                    <Link to="/events" className="nav-item">
                        <div className="nav-icon fas fa-clock"/>
                        <p>Events</p>
                    </Link>
                </div>
                <div className="navbar-nav">
                    <Link to="/" className="nav-item">
                        <div className="nav-icon fa fa-sign-out" onClick={props.handleLogout}/>
                        <p>Logout</p>
                    </Link>
                </div>
            </nav>
        </>
    )

    // NAVBAR WHEN LOGGED OUT (INVISIBLE)  - - - - - - - - - - - - - - - -
    const loggedOut = (
        <>
<<<<<<< HEAD
            <nav className="navbar">
=======
            <nav className="navbar invisible">
>>>>>>> main
                <div className="navbar-nav">
                    <Link to="/" className="nav-item">
                        <div className="nav-icon fa fa-sign-in"/>
                    </Link>
                </div>
                <div className="navbar-nav">
                    <Link to="/register" className="nav-item">
                        <div className="nav-icon fa fa-user-plus"/>
                    </Link>
                </div>
            </nav>
        </>
    )

    // RETURN  - - - - - - - - - - - - - - - -
    return (
        <div className="container">
            {props.currentUser ? loggedIn : loggedOut}
        </div>
    )
}

