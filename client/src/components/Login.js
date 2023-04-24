import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user";
import '../css/Login.css';


function Login() {
    const { setUser } = useContext(UserContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(null)
    const [passwordType, setPasswordType] = useState("password");
    const handlePasswordChange = (evnt) => {
        setPassword(evnt.target.value);
    }
    const togglePassword = () => {
        setPasswordType(passwordType === "password" ? "text" : "password");
      };

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const newLogin = {
            email: email,
            password: password,
        }
        // console.log(newLogin);

        fetch('https://tamasha.onrender.com/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newLogin)
        })
            .then((res) => {
                if (res.ok) {
                    res.json().then((user) => setUser(user));
                    navigate(`/`);
                }
                else {
                    res.json().then((err) => setErrors("Invalid Username or Password!!"));

                }
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="card-login">

                    <h4>Welcome back!</h4>

                    <input className="form-control"
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    <br />

                    <input className="form-control"
                        type={passwordType}
                        placeholder="Enter Password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required />
                    <button className="password-toggle" type="button" onClick={togglePassword}>
                        {passwordType === "password" ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#008080" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#008080" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                            </svg>}
                    </button>
                    <br />

                    <p style={{ color: 'red' }}>{errors}</p>


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