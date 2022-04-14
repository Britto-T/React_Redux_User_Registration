import {
    Circle,
    FeatureGroup,
    LayerGroup,
    MapContainer,
    Popup,
    Rectangle,
    TileLayer,
  } from 'react-leaflet'
import { Icon, LatLngTuple } from "leaflet";
import L from 'leaflet';
import pic from "leaflet/dist/images/marker-icon.png"
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import "leaflet/dist/leaflet.css";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
  
  const center:LatLngTuple = [51.505, -0.09]

  const rectangle:L.LatLngBoundsLiteral = [
    [51.49, -0.08],
    [51.5, -0.06],
  ]
  
  const fillBlueOptions = { fillColor: 'blue' }
  const fillRedOptions = { fillColor: 'red' }
  const greenOptions = { color: 'green', fillColor: 'green' }
  const purpleOptions = { color: 'purple' }
  
  function OtherLayersExample() {
    let DefaultIcon = L.icon({
        iconRetinaUrl:iconRetina,
        iconUrl: icon,      
        shadowUrl: iconShadow,     
      });
    L.Marker.prototype.options.icon = DefaultIcon;
    return (
      <MapContainer center={center} zoom={13} style={{ height: "800px" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayerGroup>
          <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
          <Circle
            center={center}
            pathOptions={fillRedOptions}
            radius={100}
            stroke={false}
          />
          <LayerGroup>
            <Circle
              center={[51.51, -0.08]}
              pathOptions={greenOptions}
              radius={100}
            />
          </LayerGroup>
        </LayerGroup>
        <FeatureGroup pathOptions={purpleOptions}>
          <Popup>Popup in FeatureGroup</Popup>
          <Circle center={[51.51, -0.06]} radius={200} />
          <Rectangle bounds={rectangle} />
        </FeatureGroup>
      </MapContainer>
    )
  }

  export default OtherLayersExample