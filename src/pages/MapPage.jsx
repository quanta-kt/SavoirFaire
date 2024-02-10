import { useParams } from "react-router";
import MapView from "../components/MapView";

export default function MapPage() {
  const { lat, lon } = useParams();
  const position = [lat, lon];

  return (
    <MapView
      position={position}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}
