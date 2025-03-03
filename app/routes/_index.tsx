import { useState } from 'react'
import Header from '~/components/Header'
import IPAddressInfo from '~/components/IPAddressInfo'
import { IPData } from '~/types/ip-data'

export default function Index() {
  const [isLoading, setIsLoading] = useState(false)
  const [currentIPData, setCurrentIPData] = useState<IPData | null>(null)

  const handleSearch = (query: string) => {
    if (!query) return

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <main className="flex flex-col min-h-screen">
      <Header onSearch={handleSearch} isLoading={isLoading} />

      <div className="px-6">
        <IPAddressInfo data={currentIPData} isLoading={isLoading} />
      </div>

      <div>Map</div>
    </main>
  )
}
