import { useFetcher, useNavigation } from '@remix-run/react'
import { useEffect, useState } from 'react'
import Header from '~/components/Header'
import Map from '~/components/Map'
import { IPData } from '~/types/ip-data'
import { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'IP Address Tracker' },
    {
      description:
        'View any IP address or domain information with our IP Address Tracker tool',
    },
  ]
}

export default function Index() {
  const [currentIPData, setCurrentIPData] = useState<IPData | null>(null)
  const navigation = useNavigation()
  const fetcher = useFetcher()

  const isLoading = navigation.state === 'loading' || fetcher.state !== 'idle'

  const handleSearch = (query: string) => {
    if (!query) return

    fetcher.load(`/api/ip-lookup?query=${encodeURIComponent(query)}`)
  }

  useEffect(() => {
    if (!currentIPData) {
      fetcher.load('/api/ip-lookup')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (
      fetcher.data &&
      typeof fetcher.data === 'object' &&
      !('error' in fetcher.data)
    ) {
      setCurrentIPData(fetcher.data as IPData)
    }
  }, [fetcher.data])

  return (
    <main className="flex flex-col min-h-screen">
      <Header onSearch={handleSearch} isLoading={isLoading} />

      <div className="flex-grow relative">
        {currentIPData ? (
          <Map data={currentIPData} zoom={20} />
        ) : (
          <div className="absolute inset-0 w-full h-full z-0 bg-gray-200 flex items-center justify-center text-black">
            Search for an IP address
          </div>
        )}
      </div>
    </main>
  )
}
