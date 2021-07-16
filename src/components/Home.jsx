import { useState, useEffect } from "react"
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import Login from'./Login'


export default function Home(props) {
    const [locations, setLocations] = useState([])

    // SET DATA FOR ALL LOCATIONS - - - - - - - - - - - - - - - - 
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/location`)
        .then(foundLocations => {
            setLocations(foundLocations.data)
        })
        .catch(err => console.log(err))
    },[])

    // REDIRECT ON USER ERROR - - - - - - - - - - - - - - - - 
    if (!props.currentUser) return (
        <Redirect 
            to='/' 
            component={ Login } 
            currentUser={ props.currentUser }
        />
    )
    
    // RETURN  - - - - - - - - - - - - - - - - 
    return (
        <>
            <h2 className="component-header">Home</h2>
            <div className="map-box">
                <img src='/code-chella-map.png' alt="map"/>
                <Link to={{
                    pathname:'/location',
                    localInfo: { data: locations[0] }
                }}>
                    <div className="marker-box">
                        <p className="map-tag" id="sahara-tag">Sahara</p>
                        <div className="fas fa-map-marker-alt" id="sahara"/>
                    </div>
                </Link>
                <Link to={{
                    pathname:'/location',
                    localInfo: { data: locations[1] }
                }}>
                    <div className="marker-box">
                        <p className="map-tag" id="beer-barn-tag">Barn</p>
                        <div className="fas fa-map-marker-alt" id="beer-barn"/>
                    </div>
                </Link>
                <Link to={{
                    pathname:'/location',
                    localInfo: { data: locations[2] }
                }}>
                    <div className="marker-box">
                        <p className="map-tag" id="stage-tag">Stage</p>
                        <div className="fas fa-map-marker-alt" id="stage"/>
                    </div>
                </Link>
            </div>
        </>
    )
}