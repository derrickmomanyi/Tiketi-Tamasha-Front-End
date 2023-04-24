import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/user";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import PasswordStrengthMeterOrg from "./PasswordStrengthMeterOrg";
import '../css/SignUp.css';




function SignUp() {
    const { setUser } = useContext(UserContext)
    //customer signup state variables
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState(null)
    const [passwordType, setPasswordType] = useState("password");
    const [passwordConfirmationType, setPasswordConfirmationType] = useState("password");


    const togglePassword = () => {
        setPasswordType(passwordType === "password" ? "text" : "password");
    };
    const togglePasswordConfirmation = () => {
        setPasswordConfirmationType(passwordConfirmationType === "password" ? "text" : "password");
    };

    const navigate = useNavigate();

    //organizer signup state variables
    const [usernameOrg, setUsernameOrg] = useState("");
    const [emailOrg, setEmailOrg] = useState("");
    const [passwordOrg, setPasswordOrg] = useState("");
    const [passwordConfirmationOrg, setPasswordConfirmationOrg] = useState("");
    const [errorsOrg, setErrorsOrg] = useState(null)
    const [passwordOrgType, setPasswordOrgType] = useState("password");
    const [passwordConfirmationOrgType, setPasswordConfirmationOrgType] = useState("password");

    const togglePasswordOrg = () => {
        setPasswordOrgType(passwordOrgType === "password" ? "text" : "password");
    };
    const togglePasswordOrgConfirmation = () => {
        setPasswordConfirmationOrgType(passwordConfirmationOrgType === "password" ? "text" : "password");
    };

    function handleSubmit(e) {
        e.preventDefault();

        const newSignup = {
            username: username,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
        }
        // console.log(newSignup);

        if (username.length < 4) {
            setErrors("Username must be at least 4 characters long!!");
        }
        else if (password.length < 4) {
            setErrors("Password must be at least 4 characters long!!");
        }
        else if (!password.includes('@')) {
            setErrors("Password should include an @")
        }
        else if (password !== passwordConfirmation) {
            setErrors("Passwords do not match");
        }
        else {
            fetch('https://tamasha.onrender.com/customers', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newSignup)
            })
                .then((res) => {
                    if (res.ok) {
                        res.json().then((user) => setUser(user));
                        navigate(`/login`);
                    }
                    else {
                        res.json().then((err) => alert(err.errors));
                    }
                })

        }
    }

    function handleSubmitOrg(e) {
        e.preventDefault();

        const newSignupOrg = {
            username: usernameOrg,
            email: emailOrg,
            password: passwordOrg,
            password_confirmation: passwordConfirmationOrg
        }
        // console.log(newSignupOrg);

        if (usernameOrg.length < 4) {
            setErrorsOrg("Username must be at least 4 characters long!!");
        }
        else if (passwordOrg.length < 4) {
            setErrorsOrg("Password must be at least 4 characters long!!");
        }
        else if (!passwordOrg.includes('@')) {
            setErrorsOrg("Password should include an @")
        }
        else if (passwordOrg !== passwordConfirmationOrg) {
            setErrorsOrg("Passwords do not match");
        }
        else {
            fetch('https://tamasha.onrender.com/organizers', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newSignupOrg)
            })
                .then((res) => {
                    if (res.ok) {
                        res.json().then((user) => setUser(user));
                        navigate(`/login`);
                    }
                    else {
                        res.json().then((err) => alert(err.errors));
                    }
                })

        }
    }

    return (
        <>
            <div className="signup">


                <div className="card-signup">
                    <form onSubmit={handleSubmit}>
                        <h5>Customer</h5>

                        <input className="form-control"
                            type="text"
                            placeholder="Enter Username"
                            value={username}
                            name="username"
                            required
                            onChange={(e) => setUsername(e.target.value)} />
                        <br />

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
                            name='password'
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)} />
                        <button className="password-toggle-signup" type="button" onClick={togglePassword}>
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

                        <input className="form-control"
                            type={passwordConfirmationType}
                            placeholder="Match Your Password"
                            name="passwordConfirmation"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            required />
                        <button className="password-toggle-signup" type="button" onClick={togglePasswordConfirmation}>
                            {passwordConfirmationType === "password" ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#008080" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#008080" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                </svg>}
                        </button>
                        <PasswordStrengthMeter password={password} />

                        <br />

                        <p style={{ color: 'red' }}>{errors}</p>


                        <button className="btn sign btn-primary" type="submit">Create Account</button>

                    </form>
                    <div className="redirect">
                        <p><span>Already have an account?</span></p>
                        <NavLink to='/login'> <p><span>Log In</span></p> </NavLink>
                    </div>
                </div>



                <div className="card-signup2">

                    <form onSubmit={handleSubmitOrg}>

                        <h5>Organizer</h5>

                        <input className="form-control"
                            type="text"
                            placeholder="Enter Username"
                            value={usernameOrg}
                            name="username"
                            required
                            onChange={(e) => setUsernameOrg(e.target.value)} />
                        <br />

                        <input className="form-control"
                            type="email"
                            placeholder="Enter Your Email"
                            name="email"
                            value={emailOrg}
                            onChange={(e) => setEmailOrg(e.target.value)}
                            required />
                        <br />

                        <input className="form-control"
                            type={passwordOrgType}
                            placeholder="Enter Password"
                            name='password'
                            value={passwordOrg}
                            required
                            onChange={(e) => setPasswordOrg(e.target.value)} />
                        <button className="password-toggle-signup" type="button" onClick={togglePasswordOrg}>
                            {passwordOrgType === "password" ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#008080" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#008080" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                </svg>}
                        </button>

                        <br />

                        <input className="form-control"
                            type={passwordConfirmationOrgType}
                            placeholder="Match Your Password"
                            name="passwordConfirmation"
                            value={passwordConfirmationOrg}
                            onChange={(e) => setPasswordConfirmationOrg(e.target.value)}
                            required />
                        <button className="password-toggle-signup" type="button" onClick={togglePasswordOrgConfirmation}>
                            {passwordConfirmationOrgType === "password" ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#008080" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#008080" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                </svg>}
                        </button>
                        <PasswordStrengthMeterOrg passwordOrg={passwordOrg} />

                        <br />

                        <p style={{ color: 'red' }}>{errorsOrg}</p>



                        <button className="btn sign btn-primary" type="submit">Create Account</button>

                    </form>
                    <div className="redirect">
                        <p><span>Already have an account?</span></p>
                        <NavLink to='/login'> <p><span>Log In</span></p> </NavLink>
                    </div>
                </div>

            </div>
        </>
    )
}
export default SignUp;