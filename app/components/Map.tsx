import { useEffect, useState } from 'react'
import type { MapContainerProps } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

interface MapProps {
  center: [number, number]
  zoom?: number
}

const Map: React.FC<MapProps> = ({ center, zoom = 13 }) => {
  const [LeafletComponents, setLeafletComponents] = useState<{
    MapContainer: React.ComponentType<MapContainerProps>
    TileLayer: React.ComponentType<any>
    Marker: React.ComponentType<any>
    Popup: React.ComponentType<any>
  } | null>(null)

  useEffect(() => {
    import('react-leaflet').then((L) => {
      setLeafletComponents({
        MapContainer: L.MapContainer,
        TileLayer: L.TileLayer,
        Marker: L.Marker,
        Popup: L.Popup,
      })
    })
  }, [])

  // Prevent SSR crash
  if (!LeafletComponents)
    return (
      <div className="absolute inset-0 w-full h-full z-0 bg-gray-200 flex items-center justify-center text-black">
        Loading map...
      </div>
    )

  const { MapContainer, TileLayer, Marker, Popup } = LeafletComponents

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <MapContainer
        center={center}
        zoom={zoom}
        className="w-full h-full"
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={center}>
          <Popup>Current Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map
