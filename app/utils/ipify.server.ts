import { IPData, IPLookupError } from '~/types/ip-data'

const API_KEY = process.env.IPIFY_API_KEY
const BASE_URL = process.env.IPIFY_BASE_URL || ''

export async function getIPData(
  ipAddressOrDomain?: string
): Promise<IPData | IPLookupError> {
  try {
    const url = new URL(BASE_URL)

    // Add API key
    url.searchParams.append('apiKey', API_KEY || '')

    // Add IP address or domain if provided
    if (ipAddressOrDomain) {
      // Check if input is an IP address or domain
      const isIP = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(ipAddressOrDomain)

      if (isIP) {
        url.searchParams.append('ipAddress', ipAddressOrDomain)
      } else {
        url.searchParams.append('domain', ipAddressOrDomain)
      }
    }

    const response = await fetch(url.toString())

    if (!response.ok) {
      throw new Error(`Failed to fetch IP data: ${response.statusText}`)
    }

    const data = await response.json()
    return data as IPData
  } catch (error) {
    console.error('Error fetching IP data:', error)
    return {
      error: error instanceof Error ? error.message : 'Failed to fetch IP data',
      status: 500,
    }
  }
}
