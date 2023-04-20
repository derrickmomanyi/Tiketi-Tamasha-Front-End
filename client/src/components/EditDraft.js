import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom'
import { UserContext } from "../context/user";
import { useNavigate } from 'react-router-dom';



function EditDraft() {
    const { user } = useContext(UserContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [draft, setDraft] = useState({
        title: '',
        category: '',
        hostedBy: '',
        featuring: '',
        dressCode: '',
        date: '',
        time: '',
        price: '',
        description: '',
        location: '',
        tickets: '',

    })

    useEffect(() => {
        fetch(`/events/${id}`)
            .then((res) => res.json())
            .then((data) => setDraft(data))

    }, [id])

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('');
    const [hostedBy, setHostedBy] = useState('');
    const [featuring, setFeaturing] = useState('');
    const [dressCode, setDressCode] = useState('');
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState("")
    const [time, setTime] = useState('')
    const [tickets, setTickets] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState("")


    useEffect(() => {
        setTitle(draft.title);
        setCategory(draft.category);
        setHostedBy(draft.hosted_by);
        setFeaturing(draft.featuring);
        setDressCode(draft.dress_code);
        setDescription(draft.description)
        setLocation(draft.location)
        setTickets(draft.tickets)
        setPrice(draft.price)
        setTime(draft.time)

    }, [draft]);



    function handleSubmit(e) {
        e.preventDefault()
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
        formData.append('organizer_id', user?.id)


        fetch(`/drafts/${id}`, {
            method: "PATCH",
            body: formData
        })
            .then(res => res.json())
        navigate(`/organizers/${user?.id}/drafts`)
    }





    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="card-addevent">
                    <h3>Edit an Event</h3>
                    <div className="create-style">
                        <div className="create-1">
                            <label>Title</label>
                            <input className="form-control form-control-lg"
                                type="text"
                                placeholder="Title"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required />
                            <br />
                            <label>Image</label>
                            <input className="form-control form-control-lg"
                                type="file"
                                name='image'
                                placeholder="Image"
                                onChange={(e) => setImage(e.target.files[0])}
                                required />
                            <br />
                            <label>Category</label>
                            <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-control form-control-lg" name='category'>
                                <option value="">Choose a category</option>
                                <option value="Music">Music</option>
                                <option value="Sports">Sports</option>
                                <option value="Motor show">Motor show</option>
                                <option value="Culture">Culture</option>
                                <option value="Theatre plays">Theatre plays</option>
                            </select>
                            <br />
                            <label>Hosted By</label>
                            <input className="form-control form-control-lg"
                                type="text"
                                placeholder="Hosted by?"
                                name="hosted_by"
                                value={hostedBy}
                                onChange={(e) => setHostedBy(e.target.value)}
                                required />
                            <br />
                            <label>Featuring</label>
                            <input className="form-control form-control-lg"
                                type="text"
                                placeholder="Featuring"
                                name="featuring"
                                value={featuring}
                                onChange={(e) => setFeaturing(e.target.value)}
                                required />
                            <br />
                            <label>Dress Code</label>
                            <input className="form-control form-control-lg"
                                type="text"
                                placeholder="Dress code"
                                name="dress_code"
                                value={dressCode}
                                onChange={(e) => setDressCode(e.target.value)}
                                required />
                            <br />
                            <label>Location</label>
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
                            <label></label>
                            <input className="form-control form-control-lg"
                                type="time"
                                placeholder="Time"
                                name="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required />
                            <br />
                            <label>Tickets</label>
                            <input className="form-control form-control-lg"
                                type="number"
                                placeholder="Tickets"
                                name="tickets"
                                value={tickets}
                                onChange={(e) => setTickets(e.target.value)}
                                required />
                            <br />
                            <label>Price</label>
                            <input className="form-control form-control-lg"
                                type="number"
                                placeholder="Price"
                                name="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required />
                            <br />
                            <label>Description</label>
                            <textarea className="form-control form-control-lg"
                                type="text"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required />
                            <br />

                            <button className="btn login btn-primary btn-lg" type="submit">Update Event</button>
                            {/* <button className="btn login btn-primary btn-lg" type="submit">Approve Event</button> */}
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export default EditDraft;