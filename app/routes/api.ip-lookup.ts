import type { LoaderFunctionArgs } from '@remix-run/node'
import { IPData } from '~/types/ip-data'

const handleSearch = async (query?: string): Promise<IPData | null> => {
  if (!query)
    return {
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

  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
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
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const query = url.searchParams.get('query') || ''

  const ipData = await handleSearch(query || undefined)

  if (!ipData) {
    return Response.json({ error: 'IP data not found' }, { status: 404 })
  }

  if ('error' in ipData) {
    return Response.json(ipData, { status: 400 })
  }

  return Response.json(ipData)
}
