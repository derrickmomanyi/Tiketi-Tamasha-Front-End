
import React, { useState } from "react";


function EventTable( {price, endTimeFormatted, totalTicketsAvailable} ){
    const [earlyBirdTicket, setEarlyBirdTicket] = useState(0);
    const [advanceTicket, setAdvanceTicket] = useState(0);
    const [VIPTicket, setVIPTicket] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");

    const earlyBirdPrice = price * 100;
    const advancePrice = price * 200;
    const VIPPrice = price * 400;


    const earlyBirdSubtotal = earlyBirdTicket * earlyBirdPrice;
    const advanceSubtotal = advanceTicket *  advancePrice;
    const VIPSubtotal = VIPTicket * VIPPrice;
    const totalTickets = earlyBirdTicket + advanceTicket + VIPTicket;
    const totalPrice = earlyBirdSubtotal + advanceSubtotal + VIPSubtotal;

    const handleEarlyBirdChange = (event) => {
        const selectedTickets = parseInt(event.target.value);
            if (selectedTickets > totalTicketsAvailable - advanceTicket - VIPTicket) {
            setErrorMessage( `No more tickets left, select a different quantity or check for another event ticket's availabilitty`);
            } else {
            setEarlyBirdTicket(selectedTickets);
            setErrorMessage("");
            }
        
      };

    const handleAdvancedChange = (event) => {
        const selectedTickets = parseInt(event.target.value);
        if (selectedTickets > totalTicketsAvailable - earlyBirdTicket - VIPTicket) {
          setErrorMessage(
            `No more tickets left, select a different quantity or check for another event ticket's availability`
          );
        } else {
          setAdvanceTicket(selectedTickets);
          setErrorMessage("");
        }
    };

    const handleVIPChange = (event) => {
        const selectedTickets = parseInt(event.target.value);
        if (
            selectedTickets > totalTicketsAvailable - earlyBirdTicket - advanceTicket
          ) {
            setErrorMessage(
                `No more tickets left, select a different quantity or check for another event ticket's availabilitty`
            );
          } else {
            setVIPTicket(selectedTickets);
            setErrorMessage("");
          }
    };
   

    return(
        <>
         {errorMessage && <div className="alert alert-danger" style={{marginBottom: "0px"}}>{errorMessage}</div>}
        <table className="table">
                <thead className="thead-dark">
                    <tr className="thead-text">
                    <th scope="col">Ticket</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="trow-early">
                        <td>Early Bird<br/>Closes on {endTimeFormatted}</td>
                        <td>Kshs {earlyBirdPrice.toFixed(2)}</td>
                        <td>
                        <select value={earlyBirdTicket} onChange={handleEarlyBirdChange}>
                            {[...Array(6)].map((_, i) => (
                            <option key={i} value={i}>{i}</option>
                            ))}
                        </select>
                        </td>
                        <td>Kshs {earlyBirdSubtotal.toFixed(2)}</td>
                    </tr>
                    <tr>                    
                        <td>Regular<br/>Closes on {endTimeFormatted}</td>
                        <td>Kshs {advancePrice.toFixed(2)}</td>
                        <td>
                            <select value={advanceTicket} onChange={handleAdvancedChange}>
                            {[...Array(5)].map((_, i) => (
                                <option key={i} value={i}>
                                {i}
                                </option>
                            ))}                           
                            </select>
                         </td>
                        <td>Kshs {advanceSubtotal.toFixed(2)}</td>
                    </tr>
                    <tr  className="trow-vip">                    
                        <td>VIP<br/>Closes {endTimeFormatted}</td>
                        <td>Kshs {VIPPrice.toFixed(2)}</td>
                        <td>
                            <select value={VIPTicket} onChange={handleVIPChange}>
                            {[...Array(4)].map((_, i) => (
                                <option key={i} value={i}>
                                {i}
                                </option>
                            ))}                               
                            </select>
                         </td>
                        <td>Kshs {VIPSubtotal.toFixed(2)}</td>
                    </tr>
                    <tr className="trow-total">
                        <td>{totalTicketsAvailable - earlyBirdTicket - advanceTicket - VIPTicket} tickets available</td>
                        <td></td>
                        <td>TOTAL TICKETS<br/>{totalTickets} Tickets</td>                        
                        <td>Kshs {totalPrice.toFixed(2)}</td>
                    </tr>
                </tbody>
                </table>
        
        
        </>
    )
}
export default EventTable;
