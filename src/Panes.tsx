import { LatLngTuple } from 'leaflet'
import { useEffect, useRef, useState } from 'react'
import { MapContainer, Pane, Rectangle, TileLayer } from 'react-leaflet'

const outer:LatLngTuple[] = [
  [50.505, -29.09],
  [52.505, 29.09],
]
const inner:LatLngTuple[] = [
  [49.505, -2.09],
  [53.505, 2.09],
]

function BlinkingPane() {
  const [render, setRender] = useState(true)
  const timerRef = useRef<any>()
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setRender((r) => !r)
    }, 5000)
    return () => {
      clearInterval(timerRef.current)
    }
  }, [])

  return render ? (
    <Pane name="cyan-rectangle" style={{ height: "800px" }}>
      <Rectangle bounds={outer} pathOptions={{ color: 'cyan' }} />
    </Pane>
  ) : null
}

function PanesExample() {
  return (
    <MapContainer bounds={outer} style={{ height: "800px" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <BlinkingPane />
      <Pane name="yellow-rectangle" style={{ zIndex: 499 }}>
        <Rectangle bounds={inner} pathOptions={{ color: 'yellow' }} />
        <Pane name="purple-rectangle">
          <Rectangle bounds={outer} pathOptions={{ color: 'purple' }} />
        </Pane>
      </Pane>
    </MapContainer>
  )
}
export default PanesExample