// import { useState, useEffect } from "react"
import Login from'./Login'
import { Redirect } from 'react-router-dom'

export default function Home(props) {

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
            <p className="map-tag" id="sahara-tag">Sahara</p>
            <p className="map-tag" id="stage-tag">Stage</p>
            <p className="map-tag" id="beer-barn-tag">Barn</p>
            <div className="fas fa-map-marker-alt" id="sahara"/>
            <div className="fas fa-map-marker-alt" id="stage"/>
            <div className="fas fa-map-marker-alt" id="beer-barn"/>
        </div>
    )
}