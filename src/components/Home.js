import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/user";
import '../css/Home.css';
import EventCard from "./EventCard";



function Home({ events, handleSearch, search }) {

    const { user } = useContext(UserContext)


    return (
        <>
            <div className="home container-fluid" id="home">
                <div className="transbox row">
                    <div className="text-home col">
                        { user ? <h3 style={{color:"white"}}>{"Hey, "  +  user.username.charAt(0).toUpperCase() + user.username.slice(1)}</h3 > : <h2 style={{color:'white'}}>An Event To Remember for Life!</h2>}
                        <p>Less work, more play. <br/> Whether you're into online streams, <br/> Weekend festivals or daytime get-togethers <br/> We have something for you. </p>
                        <form action="" className="searchbar">
                            <input type="search" className="form-control" required name="search" value={search} onChange={handleSearch} placeholder="Search by name or category"></input>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container home-cards">

            <div className="card-heading row">
                    <h2 >Events in Kenya</h2>
                    
                    <div className="event-dropdown ">
                    <select value={search} onChange={handleSearch} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option value="">Choose a category</option>
                        <option value="Music">Music</option>
                        <option value="Sports">Sports</option>
                        <option value="Motor show">Motor show</option>
                        <option value="Culture">Culture</option>
                        <option value="Theatre plays">Theatre plays</option>
                    </select>
                    </div>
            </div>

            <div className="row">
                    {events.map(event =>
   
                         <div className="col-md-3">
                            <EventCard key={event.id} event={event} user= {user} />
                        </div>
  
                    )}
                </div>


            </div>

            


        </>
    )
}
export default Home;