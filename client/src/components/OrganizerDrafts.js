import React, { useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import OrganizerDraftsCard from "./OrganizerDraftsCard";




function OrganizerDrafts(){
    const [drafts, setDrafts] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`/organizers/${id}/drafts`)
        .then((res) => res.json())
        .then((data) => {
            setDrafts(data)
            setIsLoaded(true)
        })
    }, [id])



    function onDeleteDraft(id){
        const updatedDrafts = drafts.filter(draft => draft.id !== id)
            setDrafts(updatedDrafts)
    }

    

    if (!isLoaded) return <h2>Loading...</h2>
    return(
    
        <div className="row" style={{marginLeft:"8%"}}>
         {drafts.map((draft) => 
        <OrganizerDraftsCard draft = {draft} key = {draft.id} draftId={ draft.id } onDeleteDraft={ onDeleteDraft }/>)}
         
        
        
        </div>
    )
}
export default OrganizerDrafts;