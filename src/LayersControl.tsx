import { LatLngBounds, LatLngBoundsLiteral, LatLngExpression, LatLngTuple, Map } from 'leaflet'
import {
    Circle,
    FeatureGroup,
    LayerGroup,
    LayersControl,
    MapContainer,
    Marker,
    Popup,
    Rectangle,
    TileLayer,useMap,useMapEvents
  } from 'react-leaflet'
  import L from 'leaflet'
  import {useRef,useState,useEffect} from "react"
  import icon from 'leaflet/dist/images/marker-icon.png';
  import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
  import "leaflet/dist/leaflet.css";
  import iconShadow from "leaflet/dist/images/marker-shadow.png";
  
  const center:LatLngTuple = [51.505, -0.09]

  const rectangle:L.LatLngBoundsLiteral =[
    [51.49, -0.08],
    [51.5, -0.06],
  ]
  
  function LayersControlExample() {
    let DefaultIcon = L.icon({
      iconRetinaUrl:iconRetina,
      iconUrl: icon,      
      shadowUrl: iconShadow,     
    });
  L.Marker.prototype.options.icon = DefaultIcon;
    return (
      <MapContainer center={center} zoom={13} style={{ height: "400px" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayersControl position="topright">
          <LayersControl.Overlay name="Marker with popup">
            <Marker position={center}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Layer group with circles">
            <LayerGroup>
              <Circle
                center={center}
                pathOptions={{ fillColor: 'blue' }}
                radius={200}
              />
              <Circle
                center={center}
                pathOptions={{ fillColor: 'red' }}
                radius={100}
                stroke={false}
              />
              <LayerGroup>
                <Circle
                  center={[51.51, -0.08]}
                  pathOptions={{ color: 'green', fillColor: 'green' }}
                  radius={100}
                />
              </LayerGroup>
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Feature group">
            <FeatureGroup pathOptions={{ color: 'purple' }}>
              <Popup>Popup in FeatureGroup</Popup>
              <Circle center={[51.51, -0.06]} radius={200} />
              <Rectangle bounds={rectangle} />
            </FeatureGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    )
  }

  export default LayersControlExample