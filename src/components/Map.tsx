import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SchoolMarker from "./SchoolMarker";

interface MapProps {
  schools: any[];
}

const Map: React.FC<MapProps> = ({ schools }) => {
  const [mapHeight, setMapHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setMapHeight(window.innerHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{ height: mapHeight ? `${mapHeight}px` : "100vh", width: "100%" }}
    >
      <MapContainer
        center={[35.69, 139.59]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {schools.map((school) => (
          <SchoolMarker key={school.properties.p29_003_code} school={school} />
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
