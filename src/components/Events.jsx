// import { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Login from'./Login'
import { useState } from 'react'
export default function Events(props) {

    return (
    <div>    
    <h1>Show Checkboxes</h1>
        <form action="/">
            <input type="checkbox"/>
            <label> Jackie at 8PM at Food Trucks B</label><br />
            <input type="checkbox"/>
            <label> Terry at 6PM at Stage 1</label><br />
            <input type="checkbox"/>
            <label> Ryan at 11PM at Beers</label><br />
            <input type="submit" value="Submit"/>
        </form>
    </div>
    )
}