import React from "react";
import '../css/EachEventDetails.css';


function EachEventDetails({ event }) {
  const { title, description, image, hosted_by, featuring, dress_code, location, date, time } = event
  const dates = new Date(date);
  const dayInWords = dates.toLocaleString("default", { weekday: "long" }).slice(0, 3) // "WED"
  const day = dates.toLocaleString("default", { day: "numeric" })// "15"
  const monthInWords = dates.toLocaleString("default", { month: "long" }).slice(0, 3) // "APR"


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

  const localTime = new Date(time).toLocaleString(undefined, {
    hour: "numeric",
    minute: "numeric",
    hour12: true

  });

  const endTime = new Date(time);
  endTime.setHours(23, 59, 59);
  const endTimeFormatted = endTime.toLocaleString(undefined, {
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });


  return (
    <>
      <div className="all-details">
        <div className="details-img">
          <img src={image} className="event-image" alt={title} />
        </div>
        <div className="event-details">
          <div className="event-div">
          <div className="date">
            <span style={{ marginLeft: '45px', color: 'white' }}>{dayInWords.toUpperCase()}  </span> <br />
            <span style={{ marginLeft: '45px', color: 'white' }}>{day}<sup>{getOrdinalSuffix(day)}</sup></span> <br />
            <span style={{ color: 'white' }}>{monthInWords.toUpperCase()} 2023</span>
          </div>
          <div className="rtl">
            <label>Runs till:<span>{dayInWords}, {monthInWords} {day}<sup>{getOrdinalSuffix(day)}</sup></span> </label>  <br />
            <label>Time:<span>{localTime} - {endTimeFormatted}</span> </label> <br />
            <label>Location:<span>{location}</span> </label> <br />
          </div>
          <div className="hfd">
            <label>Host:<span>{hosted_by}</span> </label> <br />
            <label>Featuring:<span>{featuring}</span></label> <br />
            <label>Dress Code:<span>{dress_code}</span><br /></label> <br />
          </div>
          </div>
          <div className="event-description">
            <span>{description}</span>
          </div>
        </div>
      </div>

    </>
  )
}
export default EachEventDetails;