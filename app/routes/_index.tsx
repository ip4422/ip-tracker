import { useState } from 'react'
import Header from '~/components/Header'
import Map from '~/components/Map'
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

      <div className="flex-grow relative">
        <Map center={[51.505, -0.09]} zoom={20} />
        {/* <Map data={currentIPData} zoom={20}/> */}
      </div>
    </main>
  )
}
