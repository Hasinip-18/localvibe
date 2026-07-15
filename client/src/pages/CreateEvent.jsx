import { useState } from "react";
import API from "../services/api";

const CreateEvent = () => {
  const [event, setEvent] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    address: "",
    image: "",
    startDate: "",
    endDate: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token");

    const eventData = {
      title: event.title,
      description: event.description,
      category: event.category,
      price: Number(event.price),
      image: event.image,
      address: event.address,
      startDate: event.startDate,
      endDate: event.endDate,

      location: {
        type: "Point",
        coordinates: [
          Number(event.longitude),
          Number(event.latitude),
        ],
      },
    };
    console.log(eventData);

    await API.post("/events", eventData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    alert("🎉 Event Created Successfully!");

  } catch (err) {
    console.error(err);

    alert(
      err.response?.data?.message ||
      "Failed to create event"
    );
  }
};

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Create Event</h2>

        <input name="title" placeholder="Title" onChange={handleChange} required />
        <input name="description" placeholder="Description" onChange={handleChange} required />
        <input name="category" placeholder="Category" onChange={handleChange} required />
        <input name="price" type="number" placeholder="Price" onChange={handleChange} required />
        <input name="image" placeholder="Image URL" onChange={handleChange} />
        <input name="address" placeholder="Address" onChange={handleChange} required />

        <input name="startDate" type="datetime-local" onChange={handleChange} required />
        <input name="endDate" type="datetime-local" onChange={handleChange} required />

        <input name="latitude" placeholder="Latitude" onChange={handleChange} required />
        <input name="longitude" placeholder="Longitude" onChange={handleChange} required />

        <button type="submit">
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;