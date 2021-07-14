    // // const [eventName, setEventName] = useState('')
    // // const [location, setLocation] = useState('')
    // // const [zoneList, setZoneList] = useState('')
    // const [title, setTitle] = useState('')
    // const [time, setTime] = useState('')
    // const [message, setMessage] = useState('')

    // // const addEvent = async (e) => {
    // //     try {
    // //         e.preventDefault()
    // //         const requestBody = { eventName, location, zoneList }
    // //         const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/events`, requestBody)

    // // } catch (err){
    // //     console.log(err)        
    // // }}

    // const meetup = async (e) => {
    //     try {
    //         e.preventDefault()
    //         const requestBody = { title, time, message }
    //         const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/events`, requestBody)

    //     } catch (err){
    //         console.log(err)
    //     }
    // }
    // return (
    //     <div className="new-event">
    //         <h3 className="new-event-head">Enter a new event</h3>
    //         {/* <form onSubmit={addEvent}>
    //             <div>
    //                 <input
    //                 id='event-input'
    //                 type='text'
    //                 placeholder='event name'
    //                 onChange={(e) => setEventName(e.target.value)}
    //                 value={eventName}
    //                 />
    //                 <input
    //                 id='location-input'
    //                 type='text'
    //                 placeholder='event venue'
    //                 onChange={(e) => setLocation(e.target.value)}
    //                 value={location}
    //                 />
    //                 <input
    //                 id='zone-input'
    //                 type='text'
    //                 placeholder='zone name'
    //                 onChange={(e) => setZoneList(e.target.value)}
    //                 value={zoneList}
    //                 />
    //             </div>
    //             <input type='submit' value='add event' />
    //         </form> */}
    //                     <form onSubmit={meetup}>
    //             <div>
    //                 <input
    //                     id='title-text'
    //                     type='text'
    //                     placeholder='enter meetup title'
    //                     onChange={(e) => setTitle(e.target.value)}
    //                     value={title}
    //                     />
    //                 <input
    //                     id='time-text'
    //                     type='time'
    //                     placeholder='enter meetup time'
    //                     onChange={(e) => setTime(e.target.value)}
    //                     value={time}
    //                     />
    //                 <input
    //                     id='message-text'
    //                     type='text'
    //                     placeholder='enter details here'
    //                     onChange={(e) => setMessage(e.target.value)}
    //                     value={message}
    //                     />
    //             </div>
    //             <input type='submit' value='Create Meetup' />
    //         </form>