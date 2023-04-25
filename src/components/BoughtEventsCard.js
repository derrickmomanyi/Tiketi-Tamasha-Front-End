import React from "react";
import '../css/BoughtEventsCard.css';

function BoughtEventsCard({ event }){

    
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
    return(
        <>
         <div className="card flip-card" style={{ width: '18rem', height: '23.5rem' }}>
                <div className='flip-card-inner'>
                <div className='flip-card-front'>
                    <img src={event.image_url} className="card-img-top" alt={event.title} />
                    <div className="card-body">
                    <div className="title-like">
                        <h5 className="card-title">{truncate(event.title, 20)}</h5>
                        <div className="event-like">


                        </div>
                    </div>
                    <div className="date-box">
                        <span>{dayInWords}, {monthInWords} {day}<sup>{getOrdinalSuffix(day)}</sup> <br />
                        <label>{event.location.toUpperCase()}</label>
                        </span>

                    </div>
                    </div>
                </div>
                <div className='flip-card-back'>
                    <img src={event.image_url} className="card-img-top" alt={event.title} />           
                    <div className='card-body'>
                    
                    </div>
                </div>
                </div>
      </div>
        </>
    )
}

export default BoughtEventsCard;