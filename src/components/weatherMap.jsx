import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function WeatherMap({ lat, lon, city }) {
  if (!lat || !lon) return null;

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-center text-white mb-5">
        🗺 Weather Map
      </h2>

      <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20">
        <MapContainer
          center={[lat, lon]}
          zoom={10}
          style={{
            height: "500px",
            width: "100%",
          }}
        >
          <TileLayer
            attribution="© OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[lat, lon]}>
            <Popup>{city}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default WeatherMap;