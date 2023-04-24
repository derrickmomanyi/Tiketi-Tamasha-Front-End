import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../context/user";
import '../css/Navbar.css';


function Navbar() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext)

    // console.log(user?.admin);


    function handleClickLogout() {
        fetch('https://tamasha.onrender.com/logout', {
            method: 'DELETE'
        })
            .then((res) => {
                if (res.ok) {
                    setUser(false);
                    navigate(`/`);

                }
            });
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid" style={{ height: "6vh" }}>
                    <a className="navbar-brand" href="/" style={{ color: "#008080" }}>
                        <strong style={{ marginLeft: "50%", fontSize: "34px" }}>TIKETI TAMASHA</strong>
                    </a>
                    <ul
                        className="navbar-nav me-auto mb-2 mb-lg-0"
                    // style={{ paddingLeft: "20%" }}
                    >
                        <li className="nav-item home-name" >
                            <NavLink to="/"
                                style={({ isActive }) =>
                                    isActive
                                        ? {
                                            color: '#008080',
                                            textDecoration: 'underline'
                                        }
                                        : { color: '#008080', textDecoration: 'none' }
                                }
                            >
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="66"
                                    fill="#008080"
                                    className="bi home-icon bi-house-fill"
                                    viewBox="0 0 16 16">
                                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                                </svg>
                                HOME
                            </NavLink>
                        </li>

                        {user && !user?.admin ? <li className="nav-item favourite">
                            <NavLink to={`/customers/${user.id}/events`}
                                style={({ isActive }) =>
                                    isActive
                                        ? {
                                            color: '#008080',
                                            textDecoration: 'underline'
                                        }
                                        : { color: '#008080', textDecoration: 'none' }
                                }
                            >
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" fill="currentColor" className="bi favourite-icon bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                                FAVOURITES</NavLink>
                        </li> : null}

                        {user && !user?.admin ? <li className="nav-item">
                            <NavLink to={`/customers/${user.id}/bought`}
                            style={({ isActive }) =>
                            isActive
                                ? {
                                    color: '#008080',
                                    textDecoration: 'underline'
                                }
                                : { color: '#008080', textDecoration: 'none' }
                        }
                        >My Tickets</NavLink></li> : null}


                        <div className="organizer-links">
                            {user?.admin ? <li className="nav-item event-org">
                                <NavLink to={`/organizers/${user.id}/drafts`}
                                    style={({ isActive }) =>
                                        isActive
                                            ? {
                                                color: '#008080',
                                                textDecoration: 'underline'
                                            }
                                            : { color: '#008080', textDecoration: 'none' }
                                    }
                                >
                                    <svg fill="#008080" className="draft" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                        width="26px" height="66px" viewBox="0 0 31.854 31.854"
                                    >
                                        <path d="M15.94,11.735c0,0.588-0.476,1.064-1.065,1.064H5.298c-0.588,0-1.065-0.476-1.065-1.064c0-0.587,0.477-1.063,1.065-1.063
		h9.577C15.465,10.672,15.94,11.148,15.94,11.735z M21.52,11.087l5.342,4.791L15.535,28.505l-5.34-4.791L21.52,11.087z
		 M20.008,16.188l-0.033-0.029c-0.127-0.114-0.293-0.172-0.461-0.163c-0.168,0.009-0.328,0.085-0.439,0.211l-6.079,6.776
		c-0.253,0.281-0.229,0.713,0.052,0.965c0.126,0.115,0.291,0.174,0.461,0.164c0.168-0.01,0.327-0.086,0.44-0.213l6.108-6.81
		C20.293,16.828,20.27,16.423,20.008,16.188z M21.27,13.751l-0.301,0.336c-0.111,0.126-0.17,0.292-0.162,0.461
		c0.01,0.169,0.086,0.328,0.211,0.441l0.035,0.031c0.127,0.113,0.293,0.171,0.461,0.162c0.17-0.009,0.328-0.085,0.44-0.211
		l0.728-0.811l-0.51-0.457C21.91,13.467,21.506,13.489,21.27,13.751z M22.035,10.51l5.341,4.791l1.312-1.462l-5.34-4.791
		L22.035,10.51z M31.047,11.21l-1.877,2.093l-5.341-4.79l1.88-2.093c0.247-0.28,0.6-0.448,0.975-0.468
		c0.375-0.021,0.742,0.109,1.021,0.359l3.234,2.903C31.52,9.735,31.569,10.629,31.047,11.21z M29.996,10.264l-3.233-2.902
		l-0.937,1.042l3.233,2.903L29.996,10.264z M9.557,24.428l5.339,4.791l-6.31,2.586c-0.243,0.098-0.521,0.051-0.716-0.125
		c-0.196-0.177-0.273-0.447-0.201-0.699L9.557,24.428z M10.045,26.13l-0.722,2.507l1.411,1.268l2.412-0.986L10.045,26.13z
		 M8.215,24.285l-0.623,2.162H2.859c-1.332,0-2.413-1.08-2.413-2.412V6.493c0-1.332,1.08-2.413,2.413-2.413h2.94V3.906
		c0-0.492,0.399-0.89,0.89-0.89h0.74C7.414,2.909,7.406,2.781,7.406,2.661C7.406,1.194,8.599,0,10.067,0
		c1.469,0,2.661,1.194,2.661,2.661c0,0.12-0.01,0.248-0.023,0.354h0.749c0.492,0,0.89,0.399,0.89,0.89v0.174h2.87
		c1.332,0,2.412,1.081,2.412,2.413v4.63l-2.128,2.372V7.506c0-0.699-0.565-1.265-1.264-1.265h-1.891v1.201
		c0,0.491-0.399,0.89-0.89,0.89H6.69c-0.492,0-0.89-0.399-0.89-0.89V6.241H3.874c-0.699,0-1.265,0.567-1.265,1.265V23.02
		c0,0.701,0.567,1.266,1.265,1.266H8.215z M9.003,2.661c0,0.124,0.023,0.248,0.061,0.355h2.005c0.04-0.107,0.062-0.23,0.062-0.355
		c0-0.587-0.477-1.065-1.064-1.065C9.479,1.596,9.003,2.074,9.003,2.661z M14.949,16.341l0.991-1.105
		c-0.014-0.576-0.484-1.054-1.064-1.054H5.298c-0.588,0-1.065,0.493-1.065,1.082c0,0.587,0.477,1.082,1.065,1.082h9.577
		C14.9,16.344,14.925,16.342,14.949,16.341z M4.233,18.791c0,0.588,0.477,1.062,1.065,1.062H11.8l1.907-2.127H5.298
		C4.71,17.727,4.233,18.203,4.233,18.791z"/>
                                    </svg>
                                    DRAFTS</NavLink>

                            </li> : ''}

                            {user?.admin ? <li className="nav-item create">
                                <NavLink to="/addevent"
                                    style={({ isActive }) =>
                                        isActive
                                            ? {
                                                color: '#008080',
                                                textDecoration: 'underline'
                                            }
                                            : { color: '#008080', textDecoration: 'none' }
                                    }
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" fill="#008080" className="bi bi-plus-square create-icon" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                    CREATE</NavLink>
                            </li> : ''}
                        </div>

                        <div className="d-grid  gap-2 d-md-flex justify-content-md-end" style={{ marginLeft: "700px", marginTop: "3px" }}>


                            {user ? <NavLink to='/logout' onClick={handleClickLogout} ><button className="btn  logout btn-outline-success btn-sm" type="button" style={{ fontSize: "23px" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" fill="currentColor" className="bi logout-icon bi-unlock-fill" viewBox="0 0 16 16">
                                    <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z" />
                                </svg>
                                Logout</button></NavLink>
                                : <NavLink to='/login'  ><button className="btn twin-btn btn-outline-success btn-sm me-md-2" type="button" style={{ fontSize: "23px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                                    </svg>
                                    Login</button></NavLink>

                            }

                            {user ? null :
                                <NavLink to='/signup'>

                                    <button className="btn twin-btn btn-outline-success btn-sm" type="button" style={{ marginLeft: "10px", fontSize: "23px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" fill="currentColor" className="bi bi-person-fill-add" viewBox="0 0 16 16">
                                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                                        </svg>
                                        SignUp</button>

                                </NavLink>
                            }


                        </div>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar;