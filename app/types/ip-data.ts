export interface IPData {
  ip: string
  location: {
    country: string
    region: string
    city: string
    lat: number
    lng: number
    postalCode: string
    timezone: string
  }
  isp: string
}

export interface IPLookupError {
  error: string
  status: number
}
