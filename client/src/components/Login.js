import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user";
import '../css/Login.css';


function Login(){
    const { setUser } = useContext(UserContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(null)
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();

        const newLogin = {
            email: email,
            password: password,            
        }
        // console.log(newLogin);

        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(newLogin)
        })
        .then((res) => {
            if(res.ok) {
                res.json().then((user) => setUser(user)); 
                navigate(`/`); 
            }
            else {
                res.json().then((err) => setErrors("Invalid Username or Password!!"));
                
            }
        })
    }

    return(
        <>
        <form onSubmit = {handleSubmit}>
        <div className="card-login">

        <h4>Welcome back!</h4>

        <input className="form-control"
         type="email" 
         placeholder="Enter Your Email" 
         name="email" 
         value={email}
         onChange ={(e) => setEmail(e.target.value)}
         required/>
         <br/>

        <input className="form-control"
         type="password"
         placeholder="Enter Password"
         name="password" 
         value = {password}
         onChange ={(e) => setPassword(e.target.value)}
         required/>
          <br/>

         <p style={{color: 'red'}}>{errors}</p>

        <button className="btn login btn-primary" type="submit">Login</button>
        <div className="redirect">
        <p><span>Don't have an account?</span></p>
        <NavLink to='/signup'> <p><span>Sign Up</span></p> </NavLink> 
        </div>
        </div>
       
        </form>
        </>
    )
}
export default Login;