import React from "react";
import { NavLink} from 'react-router-dom'


function CustomerEventsCard( { event, onDeleteEvent, eventId } ){
  

    
    const dates = new Date(event.date);
    const dayInWords = dates.toLocaleString("default", { weekday: "long" }).slice(0,3) // "WED"
    const day = dates.toLocaleString("default", { day: "numeric" })// "15"
    const monthInWords = dates.toLocaleString("default", { month: "long" }).slice(0,3) // "APR"
    

   

    function getOrdinalSuffix(day) {
        const j = day % 10, k = day % 100;
        if (j === 1 && k !== 11) {
          return "st";
        }
        if (j === 2 && k !== 12) {
          return "nd";
        }
        if (j === 3 && k !== 13) {
          return "rd";
        }
        return "th";
      }

      function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
        
      }


      function handleDeleteEvent(){
        fetch(`/customer_events/${eventId}`, {
          method:'DELETE'
        })
        onDeleteEvent(eventId)            
      }

    return(
        <>
        <div className="card " style={{ width: '18rem'}}>
            <NavLink  to={`/events/${event.id}`}>
                <img src={event.image} className="card-img-top"alt={event.title} />
                </NavLink>
                <div className="card-body">                    
                    <div className="title-like">
                        <h5 className="card-title">{truncate(event.title, 20)}</h5>
                        <div className="event-like">
                             <i className="trash-icon" onClick={handleDeleteEvent}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ff8000" className="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                </svg>
                              </i> 
                         </div>
                         </div>
                        <div className="date-box">                       
                            <span>{dayInWords}, {monthInWords} {day}<sup>{getOrdinalSuffix(day)}</sup> <br/>
                            <label>{event.location.toUpperCase()}</label>
                            </span>                        
                            
                        </div>

                </div>
            </div>
        
        
        </>
    )
}
export default CustomerEventsCard;