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
            console.log(response.data.results, "HELLO")
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
        <h1>Hey {props.currentUser.name} 👋</h1>
        
          <div>
            <li>
                {friendsData}

               <div>
                <h3>Name: Ryan Kim <input type='radio'/> </h3>
                
                  <p>Location: The Cloud</p>
                  <br/>
               </div>

               <div>
                <h3>Name: Terry Zhou <input type='radio'/> </h3>
                  <p>Location: The Cloud</p>
                  <br/>
                  
               </div>

               <div>
                <h3>Name: Jackie  Dinh <input type='radio'/> </h3>
                  <p>Location: The Cloud</p>
                  <br/>
               </div>

               <div>
                <h3>Name: Matt Velasco <input type='radio'/> </h3>
                  <p>Location: The Cloud</p>
                  <br/>
               </div>

               <div>
                <h3>Name: June (So Yun) Jung <input type='radio'/> </h3>
                  <p>Location: The Skies</p>
                  <br/>
               </div>

               <div>
                <h3>Name: Emmanuel Cruz <input type='radio'/> </h3>
                  <p>Location: The Skies</p>
                  <br/>
               </div>
            </li>
          </div>
    

        </div>
    )
}