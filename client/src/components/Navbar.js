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
        fetch('/logout', {
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
                        <li className="nav-item home-icon" >
                            <NavLink to="/"
                                style={({ isActive }) =>
                                    isActive
                                        ? {
                                            color: '#008080',
                                            textDecoration: 'underline'
                                        }
                                        : { color: '#008080', textDecoration: 'none' }
                                }
                            >HOME
                                {/* <svg xmlns="http://www.w3.org/2000/svg"
                                width="46"
                                height="56"
                                fill="#008080"
                                className="bi bi-house-fill"
                                viewBox="0 0 16 16">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                            </svg> */}
                            </NavLink>
                        </li>

                        {user && !user?.admin ? <li className="nav-item links">
                            <NavLink to={`/customers/${user.id}/events`}
                                style={({ isActive }) =>
                                    isActive
                                        ? {
                                            color: '#008080',
                                            textDecoration: 'underline'
                                        }
                                        : { color: '#008080', textDecoration: 'none' }
                                }
                            >FAVOURITES</NavLink>
                        </li> : null}


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
                                >DRAFTS</NavLink>

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
                                >CREATE</NavLink>
                            </li> : ''}
                        </div>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-end" style={{ marginLeft: "700px", marginTop: "3px" }}>


                            {user ? <NavLink to='/logout' onClick={handleClickLogout} ><button className="btn btn-outline-success btn-sm" type="button" style={{ fontSize: "23px"}}>Logout</button></NavLink>
                                : <NavLink to='/login'  ><button className="btn btn-outline-success btn-sm me-md-2" type="button" style={{ fontSize: "23px" }}>Login</button></NavLink>

                            }

                            {user ? null :
                                <NavLink to='/signup'>

                                    <button className="btn btn-outline-success btn-sm" type="button" style={{ marginLeft: "10px", fontSize: "23px" }}>SignUp</button>

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