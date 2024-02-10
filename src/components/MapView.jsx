import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView({ position, allowZoom, style }) {
  const zoomLevel = 15;

  return (
    <MapContainer
      zoom={zoomLevel}
      center={position}
      scrollWheelZoom={allowZoom ?? true}
      style={style}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>24 hours coding area 👨‍💻 </Popup>
      </Marker>
    </MapContainer>
  );
}
