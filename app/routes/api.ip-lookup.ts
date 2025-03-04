import type { LoaderFunctionArgs } from '@remix-run/node'
import { getIPData } from '~/utils/ipify.server'

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const query = url.searchParams.get('query') || ''
  let ipData = null

  if (query) {
    ipData = await getIPData(query || undefined)
  }

  if (!ipData) {
    return Response.json(
      { error: 'IP data not found', status: 404 },
      { status: 404 }
    )
  }

  if ('error' in ipData) {
    return Response.json(ipData, { status: 400 })
  }

  return Response.json(ipData)
}
