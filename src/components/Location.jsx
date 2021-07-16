import { useState } from "react"
import { Redirect } from "react-router-dom"
import Login from'./Login'

export const Location = (props) => {
    const [localInfo, setLocalInfo] = useState(props.location.localInfo.data)
    console.log(localInfo.user)

    // GENERATE FRONTEND USERS DISPLAY - - - - - - - - - - - - - - - -
    let myUsers = localInfo.user.map(user => {
        return (
            <div className="event-box">
                <div className="friend-icon fas fa-user" />
                <h6 className="no-friend-text">{user.name}</h6>
            </div>
        )
    })

    // GENERATE NO USER DISPLAY - - - - - - - - - - - - - - - -
    let noUsers = (
        <div className="event-box">
            <div className="friend-icon fas fa-sad-tear"/>
            <h6 className="no-user-text">Nobody Here But Us Chickens!</h6>
        </div>
    )
    
    // REDIRECT ON USER ERROR  - - - - - - - - - - - - - - - -
    if (!props.currentUser) return (
        <Redirect 
            to='/' 
            component={ Login } 
            currentUser={ props.currentUser }
        />
    ) 
    
    // RETURN  - - - - - - - - - - - - - - - -
    return (
        <div>
            <h2 className="component-header">{localInfo.name}</h2>
            <hr/>
            <h5>Current Users: {localInfo.user.length}</h5>
            <hr/>
            <div className="log-box height-mod">
                {localInfo.user.length > 0 ? myUsers : noUsers}
            </div>
        </div>
    )
}