import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const loggedIn = (
        <>
            <div className="navbar-nav">
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
                    <Link to="/map">
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
            </div>
        </>
    )

    const loggedOut = (
        <>
            <div className="navbar-nav">
                <div className="nav-item">
                    <Link to="/">
                        <div className="icon fa fa-sign-in"></div>
                    </Link>
                </div>
            </div>
            <div className="navbar-nav">
                <div className="nav-item">
                    <Link to="/register">
                        <div className="icon fa fa-user-plus"></div>
                    </Link>
                </div>
            </div>
        </>
    )

    return (
        <div className="container">
            <nav className="navbar navbar-expand bg-dark fixed-bottom navbar-dark">
                {props.currentUser ? loggedIn : loggedOut}
            </nav>
        </div>
    )
}