import { useEffect, useState } from "react";
import heroImage from "../assets/images/BG.png";
import API from "../services/api";
import EventCard from "../components/EventCard";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await API.get("/events");
      setEvents(res.data.events);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="hero"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="overlay">
          <h1>
            Your City.<br />
            Your People.<br />
            <span>Your Next Adventure.</span>
          </h1>

          <p>
            Discover concerts, food festivals, workshops,
            sports events, and hidden local experiences —
            all in one place.
          </p>

          <button>Explore Nearby →</button>
        </div>
      </div>

      {/* Events Section */}
      <section className="events-section">
        <h2>🔥 Trending Events</h2>

        <div className="events-grid">
          {events.length > 0 ? (
            events.map((event) => (
              <EventCard key={event._id} event={event} />
            ))
          ) : (
            <p>No events available.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;