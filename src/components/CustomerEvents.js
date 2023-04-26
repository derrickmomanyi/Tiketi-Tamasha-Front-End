import React, { useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import CustomerEventsCard from "./CustomerEventsCard";


function CustomerEvents(){
   
    const [customerEvents, setCustomerEvents] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const { id } = useParams();
   


    useEffect(() => {       
        fetch(`https://tamasha.onrender.com/customers/${id}/events`)
        .then((res) => res.json())
        .then((events) => {
            setCustomerEvents(events)
            setIsLoaded(true)
        })
        
    }, [id])

    function onDeleteEvent(id){
        const updatedCustomerEvents = customerEvents.filter(customerEvent => customerEvent.id !== id)
            setCustomerEvents(updatedCustomerEvents)
    }

   

    if (!isLoaded) return <h2>Loading...</h2>
    return(
        <>
        <div className="container">
        <div className="row">
        {customerEvents.map((events) => 
        <div className="col-md-3">
        <CustomerEventsCard key = {events.id} event = {events.event} onDeleteEvent={onDeleteEvent} eventId = {events.id}/>
        </div>
        )} 
        </div> 
        </div>     
        </>
    )
}
export default CustomerEvents;