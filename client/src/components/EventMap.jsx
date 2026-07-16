import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});
function ChangeMapView({ center }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, 13);
  }, [center, map]);

  return null;
}

const EventMap = ({ events }) => {
const [center, setCenter] = useState([17.385, 78.4867]);

useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCenter([
          position.coords.latitude,
          position.coords.longitude,
        ]);
      },
      () => {
        if (events.length > 0) {
          setCenter([
            events[0].location.coordinates[1],
            events[0].location.coordinates[0],
          ]);
        }
      }
    );
  }
}, [events]);
  return (
<MapContainer
  center={center}
      zoom={11}
      style={{
        height: "500px",
        width: "100%",
        borderRadius: "20px",
      }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ChangeMapView center={center} />

      {events.map((event) => (
        <Marker
          key={event._id}
          position={[
            event.location.coordinates[1],
            event.location.coordinates[0],
          ]}
        >
          <Popup>
            <h3>{event.title}</h3>

            <p>{event.address}</p>

            <p>₹{event.price}</p>

            <p>{event.category}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default EventMap;