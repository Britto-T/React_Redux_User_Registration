import React from "react"
import {useState} from "react"
import { MapContainer, TileLayer, Marker, Popup ,useMapEvents} from 'react-leaflet'
import Leaflet from 'leaflet';
import { Icon } from "leaflet";
import L from 'leaflet';
import pic from "leaflet/dist/images/marker-icon.png"
import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import "leaflet/dist/leaflet.css";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const LeafletMapTL=()=>{
    let DefaultIcon = L.icon({
        iconRetinaUrl:iconRetina,
        iconUrl: icon,      
        shadowUrl: iconShadow,     
      });
    L.Marker.prototype.options.icon = DefaultIcon;

//     Leaflet.Icon.Default.imagePath = 'F:\React\React_Redux_User_Registration\node_modules\leaflet'
//  //delete Leaflet.Icon.Default.prototype._getIconUrl;
//  //delete Leaflet.Icon.Default.prototype._getIconUrl;
// Leaflet.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });

    return (
      <>
        <MapContainer center={[51.505, -0.09]} zoom={13}  style={{ height: "800px" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </>
    );
}

export default LeafletMapTL