import L from "leaflet";
import { Marker, Popup } from "react-leaflet";

const customIcon = L.icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface SchoolMarkerProps {
  school: any;
}

const SchoolMarker: React.FC<SchoolMarkerProps> = ({ school }) => {
  const [lng, lat] = school.geometry.coordinates;
  console.log(school);

  return (
    <Marker position={[lat, lng]} icon={customIcon}>
      <Popup>
        <div>
          <h3>{school.properties.P29_004_ja}</h3>
        </div>
      </Popup>
    </Marker>
  );
};

export default SchoolMarker;
