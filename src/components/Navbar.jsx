import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const loggedIn = (
        <>
            <nav className="navbar">
                <div className="navbar-nav">
                    <div className="nav-item">

                        <div className="nav-icon fa fa-map-marker"></div>
                        <p>Ping Me</p>
                    </div>
                </div>
                <div className="navbar-nav">
                    <Link to="/profile" className="nav-item">
                        <div className="nav-icon fas fa-user"></div>
                        <p>Profile</p>
                    </Link>

                </div>

                {/* <div className="navbar-nav">
                    <div className="nav-item">
                        <div className="nav-icon fa fa-map-marker"></div>
                        <p>friends </p>
                    </div>
                </div> */}

                <div className="navbar-nav">
                    <Link to="/friends" className="nav-item">
                        <div className="nav-icon fas fa-user-friends"></div>
                        <p>Friends</p>
                    </Link>
                </div>

                <div className="navbar-nav">
                    <Link to="/events" className="nav-item">
                        <div className="nav-icon fas fa-clock"></div>
                        <p>Events</p>
                    </Link>
                </div>
                <div className="navbar-nav">
                    <Link to="/" className="nav-item">
                        <div class="nav-icon fa fa-sign-out" onClick={props.handleLogout}></div>
                        <p>Logout</p>
                    </Link>
                </div>
            </nav>
        </>
    )

    const loggedOut = (
        <>
            <nav className="navbar" style={{visibility: "hidden"}}>
                <div className="navbar-nav">
                    <Link to="/" className="nav-item">
                        <div className="nav-icon fa fa-sign-in"></div>
                    </Link>
                </div>
                <div className="navbar-nav">
                    <Link to="/register" className="nav-item">
                        <div className="nav-icon fa fa-user-plus"></div>
                    </Link>
                </div>
            </nav>
        </>
    )

    return (
        <div className="container">
            {props.currentUser ? loggedIn : loggedOut}
        </div>
    )
}