
import React from "react";
import { useNavigate } from 'react-router-dom';



function OrganizerDraftsCard( {draft, draftId, onDeleteDraft} ){
    const navigate = useNavigate();
     

  const dates = new Date(draft.date);
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

      function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
        
      }

      function handleDeleteDraft(){
        fetch(`/drafts/${draftId}`, {
          method:'DELETE'
        })
        onDeleteDraft(draftId)            
      }
      

      const handleRedirect = () => {      
        navigate(`/drafts/${draftId}`);
      };

        return(
        <>


      <div className="card " style={{ width: '18rem' }}>        
          <img src={draft.image_url} className="card-img-top" alt={draft.title} />       
        <div className="edit-delete">
            <i className="edit-icon" onClick={handleRedirect}>
            <button className="btn btn-outline-success btn-sm" style={{width:"4vw",border:"0"}}>Edit
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ff8000" className="bi bi-pencil-square" viewBox="0 0 16 16" style={{marginLeft:"25%"}}>

              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
            </svg>
            </button>
            </i>
            <i className="trash-icon" onClick={handleDeleteDraft}>
              <button className="btn btn-outline-success btn-sm" style={{width:"6vw",border:"0",marginLeft:"19%"}}>Delete
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ff8000" className="bi bi-trash3" viewBox="0 0 16 16" style={{marginLeft:"8%"}}>
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
            </svg>
            </button>
            </i>
          </div>
        <div className="card-body">
          <div className="title-like">
            <h5 className="card-title">{truncate(draft.title, 20)}</h5>
            <div className="event-like">


            </div>
          </div>
          <div className="date-box">
            <span>{dayInWords}, {monthInWords} {day}<sup>{getOrdinalSuffix(day)}</sup> <br />
              <label>{draft.location.toUpperCase()}</label>
            </span>

          </div>
        </div>

      </div>
        
        
        </>
    )
}
export default OrganizerDraftsCard;