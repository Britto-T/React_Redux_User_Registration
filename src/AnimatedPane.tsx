import { useRef } from 'react'
import { MapContainer, TileLayer, useMapEvent } from 'react-leaflet'
import { Icon, LatLngTuple } from "leaflet";
import L from 'leaflet';
import pic from "leaflet/dist/images/marker-icon.png"
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import "leaflet/dist/leaflet.css";
import iconShadow from "leaflet/dist/images/marker-shadow.png";


function SetViewOnClick(animateRef:any) {
  const map = useMapEvent('click', (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: animateRef.current || false,
    })
  })

  return null
}

function AnimateExample() {
  const animateRef = useRef<any>(false)
  let DefaultIcon = L.icon({
    iconRetinaUrl:iconRetina,
    iconUrl: icon,      
    shadowUrl: iconShadow,     
  });
L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <>
      <p>
        <label>
          <input
            type="checkbox"
            onChange={() => {
              animateRef.current = !animateRef.current
            }}
          />
          Animate panning
        </label>
      </p>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "800px" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SetViewOnClick animateRef={animateRef} />
      </MapContainer>
    </>
  )
}

export default AnimateExample