import React, { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CustomerEvents from './components/CustomerEvents';
import OrganizerDrafts from './components/OrganizerDrafts';
import AddEvent from './components/AddEvent';
import Layout from './components/Layout';
import Home from './components/Home';
import EachEvent from './components/EachEvent';
import EditDraft from './components/EditDraft';
import BoughtEvents from './components/BoughtEvents';
import Navbar from './components/Navbar';

function App() {

  const [events, setEvents] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('https://tamasha.onrender.com/events')
      .then((res) => res.json())
      .then((data) => setEvents(data))
  }, [])

  const handleAddEvent = (newEvent) => {
    const updatedEvent = [...events, newEvent]
    setEvents(updatedEvent)
  }

  function handleEditEvent(newEvent){
    const updatedEvents = events.map((event) => {       
        if (event.id === newEvent.id) {
            return newEvent
        }else{
        return event;
        }
       })
       setEvents(updatedEvents)
}

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const displayEvents = events.filter(event => event.category.toLowerCase().includes(search.toLowerCase()) || event.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <BrowserRouter>
      <Navbar />

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home events={displayEvents} handleSearch={handleSearch} search={search} />} />
            <Route path="customers/:id/events" element={<CustomerEvents />} />
            <Route path="/organizers/:id/drafts" element={<OrganizerDrafts />} />
            <Route path="addevent" element={<AddEvent />} />
<<<<<<< HEAD
<<<<<<< HEAD
            <Route path="/events/:id" element = {<EachEvent onEditEvent = {handleEditEvent}/>} />           
            <Route path="/drafts/:id" element = {<EditDraft onAddEvent = {handleAddEvent}/>} />
            <Route path = "/customers/:id/bought" element = {<BoughtEvents />} />
=======
            <Route path="/events/:id" element={<EachEvent />} />
            <Route path="/drafts/:id" element={<EditDraft onAddEvent={handleAddEvent} />} />
            <Route path="/customers/:id/bought" element={<BoughtEvents />} />
>>>>>>> 56432df4 (working on responsiveness)
=======
            <Route path="/events/:id" element={<EachEvent />} />
            <Route path="/drafts/:id" element={<EditDraft onAddEvent={handleAddEvent} />} />
            <Route path="/customers/:id/bought" element={<BoughtEvents />} />
=======
            <Route path="/events/:id" element = {<EachEvent onEditEvent = {handleEditEvent}/>} />           
            <Route path="/drafts/:id" element = {<EditDraft onAddEvent = {handleAddEvent}/>} />
            <Route path = "/customers/:id/bought" element = {<BoughtEvents />} />
>>>>>>> e492f2e8 (Added payment method and tickets reduce after purchase)
>>>>>>> 5a55c890 (Modified node modules)
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
