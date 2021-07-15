// keeping just to save

// import { Redirect } from 'react-router-dom'
// import axios from 'axios'
// import Login from'./Login'
// import Events from './Events' 
// import { useState } from 'react'

// export default async function meetup (e)   {
//     const [title, setTitle] = useState('')
//     const [time, setTime] = useState('')
//     const [message, setMessage] = useState('')
//     try {
//         e.preventDefault()
//         const requestBody = { title, time, message }
//         const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/events`, requestBody)

//     } catch (err){
//         console.log(err)
//     }
//     return (
//         <main>
//         <form onSubmit={meetup}>
//         <input
//             id='title-text'
//             type='text'
//             placeholder='enter meetup title'
//             onChange={(e) => setTitle(e.target.value)}
//             value={title}
//             />
//         <input
//             id='time-text'
//             type='time'
//             placeholder='enter meetup time'
//             onChange={(e) => setTime(e.target.value)}
//             value={time}
//             />
//         <input
//             id='message-text'
//             type='text'
//             placeholder='enter details here'
//             onChange={(e) => setMessage(e.target.value)}
//             value={message}
//             />
//         </form>
//         </main>
//     <input type='submit' value='Create Meetup' />
//     )