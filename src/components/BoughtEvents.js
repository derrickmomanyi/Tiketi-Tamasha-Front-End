import React, { useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import BoughtEventsCard from "./BoughtEventsCard";


function BoughtEvents(){
    const [boughtEvents, setBoughtEvents] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const { id } = useParams();
   


    useEffect(() => {       
        fetch(`https://tamasha.onrender.com/customers/${id}/bought`)
        .then((res) => res.json())
        .then((events) => {
            setBoughtEvents(events)
            setIsLoaded(true)
        })
        
    }, [id])

   

    if (!isLoaded) return <h2>Loading...</h2>
     return(
        <>
        <div className="container">
       <div className="row">
            {boughtEvents.map((events) => 
            <div className="col-md-3">
            <BoughtEventsCard key = {events.id} event = {events.event} eventId = {events.id}/>
            </div>
            )}
       </div>
       </div>
        
        </>
    )
}
export default BoughtEvents;