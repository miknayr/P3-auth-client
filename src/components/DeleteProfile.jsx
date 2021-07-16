import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Login from './Login'

export const DeleteProfile = (props) => {

    // DELETE CURRENT USER - - - - - - - - - - - - - - - - 
    const deleteSelf = async (e) => {
        try {
            e.preventDefault()
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/delete/${props.currentUser.id}`)
            props.handleLogout()
        } catch (err) {
            console.log(err)
        }
    }

    // REDIRECT ON USER ERROR - - - - - - - - - - - - - - - - 
    if (!props.currentUser) return (
        <Redirect
            to='/login'
            component={Login}
            currentUser={props.currentUser}
        />
    )

    // RETURN - - - - - - - - - - - - - - - - 
    return (
        <div className="log-box">
            <div className="text-box">
                <h2 className="log-header">Are You Sure?</h2>
                <div className="h6-box">
                    <h6 className="h6-header">This action</h6>
                    <h6 className="h6-header">Cannot be undone</h6>
                </div>
            </div>
            <form onSubmit={deleteSelf}>
                <input 
                    className="btn login-input"
                    type="submit" 
                    value="Delete Me"/>
            </form>
        </div>
    )
}