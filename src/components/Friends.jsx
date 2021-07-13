import { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Login from'./Login'

export default function Friends(props) {
    // state is information from the server
    const [message, setMessage] = useState('')

    // hit the auth locked route on the backend
    useEffect(() => {
        const getPrivateMessage = async () => {
        try {
        // get the jwt from local storage
            const token = localStorage.getItem('jwtToken')

        // make up the auth headers
            const authHeaders = {
            Authorization: token
            }
                
        // hit the auth locked enpoint
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/auth-locked`, {headers: authHeaders})
            
        // set state with the data from the server

            console.log(response.data)
        } catch(err) {
            console.log(err)

            
            // log the user out if an error occurs
            props.handleLogout()

        }
        }
        // getPrivateMessage()    
    }, [props])


    const [friends, setFriends] = useState([])
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/friends`) // <--- change to what jackie makes for backend get-route
        .then((response) => {
            setFriends(response.data.results)
            console.log(response.data.results)
        })
        .catch((err) => console.log(err))
        }, [])

    const friendsData = friends.map((friends, i) => {  //<---- check the currentUser.map data
    // console.log('🚀 friend name: ' + friends.name )
    // console.log('🚀 friend location: ' + friends.location )

    return (
        <div class="shipCard">
          <li key={i}>
              <p>Name: Ryan Kim</p>
              <p>Event: Code-Chella</p>
              <p>Location: The Cloud</p>
              <p>zoneList: Zone 1</p>
              <br/>
          </li>

        </div>
    )
    })





    // redirect if  there is no user in state
    if(!props.currentUser) return <Redirect to='/login' component={ Login } currentUser={ props.currentUser } />
    return (
        <div>
        <h4>Greetings {props.currentUser.name} 👋</h4>
        
          <div>
            <li>
                {/* {friendsData} */}

               <div>
                <p>Name: Ryan Kim</p>
                  <p>Event: Code-Chella</p>
                  <p>Location: The Cloud</p>
                  <p>zoneList: Zone 1</p>
                  <br/>
               </div>

               <div>
                <p>Name: Terry Zhou</p>
                  <p>Event: Code-Chella</p>
                  <p>Location: The Cloud</p>
                  <p>zoneList: Food Truck A</p>
                  <br/>
               </div>

               <div>
                <p>Name: June (So Yun) Jung</p>
                  <p>Event: Design-Chella</p>
                  <p>Location: The Skies</p>
                  <p>zoneList: Food Truck B</p>
                  <br/>
               </div>
            </li>
          </div>
    

        </div>
    )
}