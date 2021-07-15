import Login from'./Login'
import { Redirect, Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from 'axios'


export default function Home(props) {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/location`)
        .then(foundLocations => {
            setLocations(foundLocations.data)
        })
        .catch(err => console.log(err))
    },[])

    if (!props.currentUser) return (
        <Redirect 
            to='/' 
            component={ Login } 
            currentUser={ props.currentUser }
        />
    )
    
    return (
        <div className="map-box">
            <img src='/code-chella-map.png' alt="map"/>
            <Link to={{
                pathname:'/location',
                localInfo: {
                    data: locations[0]
                }
            }}>
                <div className="marker-box">
                    <p className="map-tag" id="sahara-tag">Sahara</p>
                    <div className="fas fa-map-marker-alt" id="sahara"/>
                </div>
            </Link>
            <Link to={{
                pathname:'/location',
                localInfo: {
                    data: locations[1]
                }
            }}>
                <div className="marker-box">
                    <p className="map-tag" id="beer-barn-tag">Barn</p>
                    <div className="fas fa-map-marker-alt" id="beer-barn"/>
                </div>
            </Link>
            <Link to={{
                pathname:'/location',
                localInfo: {
                    data: locations[2]
                }
            }}>
                <div className="marker-box">
                    <p className="map-tag" id="stage-tag">Stage</p>
                    <div className="fas fa-map-marker-alt" id="stage"/>
                </div>
            </Link>
        </div>
    )
}