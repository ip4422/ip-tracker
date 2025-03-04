import { useEffect, useState } from 'react'
import type {
  MapContainerProps,
  TileLayerProps,
  MarkerProps,
  PopupProps,
} from 'react-leaflet'
import type { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { IPData } from '~/types/ip-data'

interface MapProps {
  data: IPData
  zoom?: number
}

interface CustomMapContainerProps extends MapContainerProps {
  center: LatLngExpression | undefined
  zoom: number | undefined
}

const Map: React.FC<MapProps> = ({ data, zoom = 13 }) => {
  const center: [number, number] = [data?.location?.lat, data?.location?.lng]

  const [LeafletComponents, setLeafletComponents] = useState<{
    MapContainer: React.ComponentType<CustomMapContainerProps>
    TileLayer: React.ComponentType<TileLayerProps>
    Marker: React.ComponentType<MarkerProps>
    Popup: React.ComponentType<PopupProps>
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
