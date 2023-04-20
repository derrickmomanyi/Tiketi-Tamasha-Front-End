import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";
import { useNavigate } from 'react-router-dom';

function AddEventForm({ onAddDrafts }) {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();



  const [image, setImage] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [hostedBy, setHostedBy] = useState("")
  const [featuring, setFeaturing] = useState("")
  const [dressCode, setDressCode] = useState("")
  const [location, setLocation] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [tickets, setTickets] = useState("")
  const [price, setPrice] = useState("")





  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("hosted_by", hostedBy);
    formData.append("featuring", featuring);
    formData.append("dress_code", dressCode);
    formData.append("location", location);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("tickets", tickets);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", image);
    // formData.append('organizer_id', user?.id)


    fetch("/events", {
      method: "POST",
      body: formData
    })
    .then(res => res.json())
    .then(drafts => {
      // onAddDrafts(drafts)
      setTitle('')
      setImage('')
      setCategory('')
      setDescription('')
      setHostedBy('')
      setFeaturing('')
      setDressCode('')
      setLocation('')
      setDate('')
      setTime('')
      setTickets('')
      setPrice('')
      // navigate(`/organizers/${user?.id}/drafts`)
    })
   
    
  };

  return (
    <div className="add-Event">
      <form onSubmit={handleSubmit}>
        <div className="card-addevent">
        <h3>Create an Event</h3>
          <div className="create-style">
          <div className="create-1">
            <input className="form-control form-control-lg"
              type="text"
              placeholder="Title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required />
            <br />

            <input className="form-control form-control-lg"
              type="file"
              name='image'
              placeholder="Image"
              onChange={(e) => setImage(e.target.files[0])}
              required />
            <br />


            <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-control form-control-lg" name='category'>
              <option value="">Choose a category</option>
              <option value="Music">Music</option>
              <option value="Sports">Sports</option>
              <option value="Motor show">Motor show</option>
              <option value="Culture">Culture</option>
              <option value="Theatre plays">Theatre plays</option>
            </select>

            <br />


            <input className="form-control form-control-lg"
              type="text"
              placeholder="Hosted by?"
              name="hosted_by"
              value={hostedBy}
              onChange={(e) => setHostedBy(e.target.value)}
              required />
            <br />

            <input className="form-control form-control-lg"
              type="text"
              placeholder="Featuring"
              name="featuring"
              value={featuring}
              onChange={(e) => setFeaturing(e.target.value)}
              required />
            <br />

            <input className="form-control form-control-lg"
              type="text"
              placeholder="Dress code"
              name="dress_code"
              value={dressCode}
              onChange={(e) => setDressCode(e.target.value)}
              required />
            <br />

            <input className="form-control form-control-lg"
              type="text"
              placeholder="Location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required />
            <br />
          </div>
          <div className="create-2">
            <input className="form-control form-control-lg"
              type="date"
              placeholder="Date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required />
            <br />

            <input className="form-control form-control-lg"
              type="time"
              placeholder="Time"
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required />
            <br />

            <input className="form-control form-control-lg"
              type="number"
              placeholder="Tickets"
              name="tickets"
              value={tickets}
              onChange={(e) => setTickets(e.target.value)}
              required />
            <br />

            <input className="form-control form-control-lg"
              type="number"
              placeholder="Price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required />
            <br />

            <textarea className="form-control form-control-lg"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required />
            <br />

            <button className="btn login btn-primary btn-lg" type="submit">Create Event</button>
          </div>
          </div>
        </div>

      </form>
    </div>
  );
}

export default AddEventForm;
