import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../css/EventCard.css';

function EventCard({ event, user }) {

  const { id, image_url, title, date, location } = event
  const [liked, setLiked] = useState(false)
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }


  const likedEvent = {
    customer_id: user ? user.id : 1, event_id: event.id
  }



  function handleAddEvent() {
    fetch('/customer_events', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(likedEvent)
    })
    setLiked(true)
  }

  let selectedEventId;

  user && !user?.admin ? selectedEventId = user.customer_events.map(customerEvent => customerEvent.event).map(customerEvent => customerEvent.id) : selectedEventId = []



  const dates = new Date(date);
  const dayInWords = dates.toLocaleString("default", { weekday: "long" }).slice(0, 3) // "WED"
  const day = dates.toLocaleString("default", { day: "numeric" })// "15"
  const monthInWords = dates.toLocaleString("default", { month: "long" }).slice(0, 3) // "APR"


  // console.log(location.slice(0, 2)); //0 inakuanga index  number ya pili the number of characters you want to get

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



  return (
    <>

      <div className="card " style={{ width: '18rem' }}>
        <NavLink to={`/events/${event.id}`}>
          <img src={image_url} className="card-img-top" alt={title} />
        </NavLink>
        <div className="card-body">
          <div className="title-like">
            <h5 className="card-title">{truncate(title, 20)}</h5>
            <div className="event-like">
              {user && !user?.admin ? selectedEventId.indexOf(id) !== -1 || liked ? <i className="fa-solid fa-heart eventheart liked" onClick={handleAddEvent}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
              </svg></i> : <i className="fa-solid fa-heart eventheart" onClick={handleAddEvent}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
              </i>
                :
                null
              }

            </div>
          </div>
          <div className="date-box">
            <span>{dayInWords}, {monthInWords} {day}<sup>{getOrdinalSuffix(day)}</sup> <br />
              <label>{location.toUpperCase()}</label>
            </span>

          </div>

        </div>
      </div>
    </>
  )
}
export default EventCard;
