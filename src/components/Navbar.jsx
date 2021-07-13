import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const loggedIn = (
        <>
            <nav className="navbar">
                <div className="navbar-nav">
                    <div className="nav-item">
                        <Link to="/profile">
                            <div className="nav-icon fas fa-user"></div>
                            <p>Home</p>
                        </Link>
                    </div>
                </div>

                {/* <div className="navbar-nav">
                    <div className="nav-item">
                        <div className="nav-icon fa fa-map-marker"></div>
                        <p>friends </p>
                    </div>
                </div> */}

                <div className="navbar-nav">
                    <div className="nav-item">
                        <Link to="/friends">
                            <div className="nav-icon fas fa-user-friends"></div>
                            <p>Friends</p>
                        </Link>
                    </div>
                </div>

                <div className="navbar-nav">
                    <div className="nav-item">
                        <Link to="/events">
                            <div className="nav-icon fas fa-clock"></div>
                            <p>Events</p>
                        </Link>
                    </div>
                </div>
                <div className="navbar-nav">
                    <div className="nav-item">
                        <Link to="/">
                            <div class="nav-icon fa fa-sign-out" onClick={props.handleLogout}></div>
                            <p>Logout</p>
                        </Link>
                    </div>
                </div>
            {/* <div className="navbar-nav">
                <div className="nav-item">
                    <Link to="/profile">
                    <div class="icon fas fa-user"></div>
                    </Link>
                    </div>
                    </div>
                    <div className="navbar-nav">
                    <div className="nav-item">
                    <Link to="/friends">
                    <div class="icon fas fa-user-friends"></div>
                    </Link>
                    </div>
                    </div>
                    <div className="navbar-nav">
                    <div className="nav-item">
                    <Link to="/events">
                    <div class="icon fas fa-map"></div>
                    </Link>
                    </div>
                    </div>
                    <div className="navbar-nav">
                    <div className="nav-item">
                    <Link to="/">
                    <div class="icon fa fa-sign-out" onClick={props.handleLogout}></div>
                    </Link>
                    </div>
                </div> */}
            </nav>
        </>
    )

    const loggedOut = (
        <>
            <nav className="navbar" style={{visibility: "hidden"}}>
                <div className="navbar-nav">
                    <div className="nav-item">
                        <Link to="/">
                            <div className="nav-icon fa fa-sign-in"></div>
                        </Link>
                    </div>
                </div>
                <div className="navbar-nav">
                    <div className="nav-item">
                        <Link to="/register">
                            <div className="nav-icon fa fa-user-plus"></div>
                        </Link>
                    </div>
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