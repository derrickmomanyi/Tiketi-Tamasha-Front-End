import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useContext } from "react";
// import { UserContext } from "../context/user";
import '../css/EachEvent.css';
import EventTable from "./EventTable";
import PaymentForm from "./PaymentForm";
import EachEventDetails from "./EachEventDetails";
import Calendar from "./Calendar";


function EachEvent(){
    const [isLoaded, setIsLoaded] = useState(false)
    const [event, setEvent] = useState([])
    // const { user } = useContext(UserContext) 
    const { id } = useParams(); 

    
    useEffect(() => {
        fetch(`/events/${id}`)
        .then((res) => res.json())
        .then(event => {
          setEvent(event);
          setIsLoaded(true)
      })
    }, [id])
    

        if (!isLoaded) return <h2 className='loading'>Loading...</h2>

        const {title, price, time, tickets} = event

        const endTime = new Date(time);
        endTime.setHours(23, 59, 59);
        const endTimeFormatted = endTime.toLocaleString(undefined, {
          hour: "numeric",
          minute: "numeric",
          hour12: true
        });
        
       
    return(
        <>
        <div className="event-body">
            <div className="event-title">
                 <h1>{title}</h1>
                 <Calendar/>
                 <a href="#payment"><button  type="button" className="btn btn-danger">BUY TICKET</button></a>
            </div>
            <div className="event-details-body">
                <EachEventDetails  event= {event}/>             
            </div>
          
            <div className="event-highlight">
                <p> Get your tickets to {title} </p>
                <h6>Kindly indicate how many tickets you'd like</h6>
            </div>
            <div className="event-table">            
                 <EventTable price = {price} endTimeFormatted={endTimeFormatted} totalTicketsAvailable={tickets}/>               

            </div>
            <div className="payment-details" id="payment">
                <PaymentForm />
                <div className="last-div">

                    </div>
            </div>


        </div>
       
        
        </>
    )
}
export default EachEvent;