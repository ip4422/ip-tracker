import type { IPData } from '~/types/ip-data'

export const DEFAULT_IP_DATA: IPData = {
  ip: '127.0.0.1',
  location: {
    city: 'London',
    region: 'England',
    country: 'United Kingdom',
    lat: 51.5074,
    lng: -0.1278,
    postalCode: 'SW1A 1AA',
    timezone: 'Europe/London',
  },
  isp: 'Example ISP',
}
