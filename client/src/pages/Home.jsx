import { useEffect, useState } from "react";
import heroImage from "../assets/images/BG.png";
import API from "../services/api";
import EventCard from "../components/EventCard";
import EventMap from "../components/EventMap";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

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
  const findNearbyEvents = () => {

  if (!navigator.geolocation) {
    alert("Geolocation not supported.");
    return;
  }

  navigator.geolocation.getCurrentPosition(async (position) => {

    try {

      setLoading(true);

      const { latitude, longitude } = position.coords;

      const res = await API.get(
        `/events/nearby?latitude=${latitude}&longitude=${longitude}&distance=5000`
      );

      setEvents(res.data.events);

      setLoading(false);

    } catch (error) {

      console.error(error);

      setLoading(false);

    }

  });

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

   <button onClick={findNearbyEvents}>
  📍 Find Nearby Events
</button>
        </div>
      </div>

      {/* Events Section */}
      <section className="events-section">
        <h2>🔥 Trending Events</h2>

        <div className="events-grid">
          {loading ? (
  <p>📍 Finding nearby events...</p>
) : events.length > 0 ? (
  events.map((event) => (
    <EventCard key={event._id} event={event} />
  ))
) : (
  <p>No events found nearby.</p>
)}
        </div>
      </section>
      <section className="events-section">
  <h2>🗺️ Event Map</h2>

  <EventMap events={events} />
</section>
    </>
  );
};

export default Home;