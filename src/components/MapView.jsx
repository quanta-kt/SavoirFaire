import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView({
  position,
  points,
  allowZoom,
  style,
  zoomLevel,
}) {
  return (
    <MapContainer
      zoom={zoomLevel ?? 15}
      center={position}
      scrollWheelZoom={allowZoom ?? true}
      style={style}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {points &&
        points.map((it) => (
          <Marker position={it.position}>
            <Popup>{it.content}</Popup>
          </Marker>
        ))}

      <Marker position={position} />
    </MapContainer>
  );
}
