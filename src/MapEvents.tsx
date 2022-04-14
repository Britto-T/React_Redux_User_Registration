import { LatLngBounds, LatLngBoundsExpression, LatLngTuple } from 'leaflet'
import { useState } from 'react'
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet'

function LocationMarker() {
  const [position, setPosition] = useState<LatLngTuple>([0,0])
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e:any) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

function MapEvents() {
  return (
    <MapContainer center={{ lat: 51.505, lng: -0.09 }} zoom={13} style={{ height: "800px" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  )
}
export default MapEvents