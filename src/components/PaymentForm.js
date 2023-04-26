<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState, useEffect} from "react";
>>>>>>> ed3c551f (Modified node modules)
=======
import React, { useState } from "react";
>>>>>>> 5a55c890 (Modified node modules)
import { useContext } from "react";
import { UserContext } from "../context/user";
import { useNavigate } from 'react-router-dom';


function PaymentForm({amount, id, earlyBirdTicket, advanceTicket, VIPTicket, totalTicketsAvailable, totalTickets, onEditEvent}){     
    const { user } = useContext(UserContext) 
    const [phoneNumber, setPhoneNumber] = useState("")
<<<<<<< HEAD
<<<<<<< HEAD
    const navigate = useNavigate();
=======
>>>>>>> ed3c551f (Modified node modules)
=======
    const navigate = useNavigate();
>>>>>>> 5a55c890 (Modified node modules)


    function ticketReduce(){
    
        const reduce = {
            tickets: totalTicketsAvailable - totalTickets
        }
            
        fetch(`https://tamasha.onrender.com/events/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reduce)
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
    }

        function handleSubmit(e){
            e.preventDefault()
            const formData = {
                phone_number : phoneNumber,
                amount : amount,
                early_bird: earlyBirdTicket,
                advance: advanceTicket,
                vip: VIPTicket,
                customer_id: user ? user.id : 1,
                event_id: id 
            }


            fetch('https://tamasha.onrender.com/bought_events', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            })
            ticketReduce()
            navigate(`/`)
        
    
        }
        
      
    
      
    return(
        <div>
        {user  ?  <>
        
            <h3 style={{marginLeft: "580px"}}>Enter Your Details</h3>
                    <form onSubmit={handleSubmit}>
                        <div >
                        <label>Phone Number</label>        
                        <input className="form-control"
                        type="tel"
                        placeholder="254xxxxxxxxx"
                        pattern="[0-9]{12}"
                        maxLength='12'
                        minLength= '12'
<<<<<<< HEAD
<<<<<<< HEAD
                        name="phone" 
                        value={phoneNumber}
                        onChange={(e)=> setPhoneNumber(e.target.value)}                                                              
=======
                        name="phone"                                                               
>>>>>>> ed3c551f (Modified node modules)
=======
                        name="phone" 
                        value={phoneNumber}
                        onChange={(e)=> setPhoneNumber(e.target.value)}                                                              
>>>>>>> 5a55c890 (Modified node modules)
                        required/><br/>

                        
                        <button className="btn btn-danger pay" type="submit">Proceed To Pay</button>
                        </div>                    
           
                    </form>
            
            
            </> 
        : <h3 style={{marginLeft:"35%"}}>Login as a customer to purchase a ticket</h3> }
        </div>
      
    )
}
export default PaymentForm;