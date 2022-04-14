import { MapContainer, SVGOverlay, TileLayer } from 'react-leaflet'
import Leaflet, { LatLngBounds, LatLngTuple } from 'leaflet';
import { Icon } from "leaflet";
import L from 'leaflet';
import pic from "leaflet/dist/images/marker-icon.png"
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import "leaflet/dist/leaflet.css";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const position:LatLngTuple = [51.505, -0.09]
const bounds:L.LatLngBoundsLiteral = [
  [51.49, -0.08],
  [51.5, -0.06],
]

function SVGOverlayExample() {
    let DefaultIcon = L.icon({
        iconRetinaUrl:iconRetina,
        iconUrl: icon,      
        shadowUrl: iconShadow,     
      });
    L.Marker.prototype.options.icon = DefaultIcon;
  return (
    <MapContainer center={position} zoom={13} style={{ height: "800px" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SVGOverlay attributes={{ stroke: 'red' }} bounds={bounds}>
        <rect x="0" y="0" width="100%" height="100%" fill="red" />
        <circle r="50" cx="10" cy="10" fill="red" />
        <text x="50%" y="50%" stroke="white">
          text
        </text>
      </SVGOverlay>
    </MapContainer>
  )
}
export default SVGOverlayExample