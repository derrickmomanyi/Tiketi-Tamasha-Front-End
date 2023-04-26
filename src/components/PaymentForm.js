import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/user";


function PaymentForm(){
    const { user } = useContext(UserContext) 

    return(
        <div>
        {user ?  <>
        
            <h3 style={{marginLeft: "580px"}}>Enter Your Details</h3>
                    <form >
                        <div >
                        <input className="form-control"
                        type="text" 
                        placeholder="Name" 
                        name="name"                     
                        required/>
                        <br/>
        
                        <input className="form-control"
                        type="tel"
                        placeholder="254xxxxxxxxx"
                        pattern="[0-9]{12}"
                        maxLength='12'
                        minLength= '12'
                        name="phone"                                          
                        required/><br/>
                                          
    
                        <button className="btn btn-danger pay" type="submit">Proceed To Pay</button>
                        </div>                    
           
                    </form>
            
            
            </> 
        : <h3 style={{marginLeft:"35%"}}>Login to access payment details</h3> }
        </div>
      
    )
}
export default PaymentForm;