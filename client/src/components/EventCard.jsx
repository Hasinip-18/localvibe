const EventCard = ({ event }) => {
  return (
    
    <div className="event-card">
      <h3>{event.title}</h3>
      {event.isFeatured && (
  <span className="featured-badge">⭐ Featured</span>
)}

      <p>📍 {event.address}</p>

      <p>📅 {new Date(event.startDate).toLocaleDateString()}</p>

      <p>💰 ₹{event.price}</p>
    </div>
  );
};

export default EventCard;