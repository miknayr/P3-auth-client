import { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Login from'./Login'

export default function Friends(props) {
    // const [friends, setFriends] = useState([])
    const [message, setMessage] = useState('')
    // hit the auth locked route on the backend
    useEffect(() => {
        const getPrivateMessage = async () => {
            try {
                const token = localStorage.getItem('jwtToken')
                const authHeaders = { Authorization: token }
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`, {headers: authHeaders})
                console.log(response.data)
            } catch(err) {
                console.log(err)
                props.handleLogout()
            }
        }
        // getPrivateMessage()    
    }, [props])

    // let friendList = ["Ryan Kim", "Terry Zhou", "Jackie Dinh", "Matt Velasco", "June (So Yun) Jung", "Emmanuel Cruz"]
    // const friendListMap = friendList.map(e => {
    //     return (
    //         <div className="friend-box">
    //             <div className="friend-icon fas fa-user"></div>
    //             <h4>{e}</h4>
    //             <input 
    //                 type='checkbox'
    //                 className="friend-button"
    //             />
    //         </div>
    //     )
    // })
    
    // useEffect(() => {
    //     console.log(props.currentUser.id, "PROPS CURRENT")
    //     axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/${props.currentUser.id}`) // <--- change to what jackie makes for backend get-route
    //     .then((response) => {
    //         setFriends(response.data.results)
    //     })
    //     .catch((err) => console.log(err))
    // }, [])

    if (!props.currentUser) return(
        <Redirect 
            to='/login' 
            component={Login} 
            currentUser={ props.currentUser }
        />
    )
    // return (
    //     <h4 className="friend-header">Invite Friends...</h4>
    //         {friendListMap}
    // )
    return (
        <div className="map-box">
            <img src='/friendspin.png' alt="friend-map"/>
        </div>
    )
}