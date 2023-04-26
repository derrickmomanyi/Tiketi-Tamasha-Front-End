import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user";


function PaymentForm({ amount, id, earlyBirdTicket, advanceTicket, VIPTicket, totalTicketsAvailable, totalTickets, onEditEvent }) {
    const [phoneNumber, setPhoneNumber] = useState("")
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    function ticketReduce() {

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

    function handleSubmit(e) {
        e.preventDefault()
        const formData = {
            phone_number: phoneNumber,
            amount: amount,
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

    return (
        <div>
            {user && !user?.admin ? <>

                <h3 style={{ marginLeft: "580px" }}>Enter Your Details</h3>
                <form onSubmit={handleSubmit}>
                    <div >
                    <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                        <input className="form-control"
                        type="tel"
                        placeholder="254xxxxxxxxx"
                        pattern="[0-9]{12}"
                        maxLength='12'
                        minLength= '12'
                        name="phone" 
                        value={phoneNumber}
                        onChange={(e)=> setPhoneNumber(e.target.value)}                                                              
                        required/><br/>

                        <button className="btn btn-danger pay" type="submit">Proceed To Pay</button>
                    </div>
                </form>
            </>
                : <h3 style={{ marginLeft: "35%" }}>Login as a customer to purchase a ticket</h3>}
        </div>

    )
}
export default PaymentForm;