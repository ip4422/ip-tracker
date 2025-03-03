import { useState } from 'react'
import Header from '~/components/Header'

export default function Index() {
  const [isLoading, setIsLoading] = useState(false)

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
    </main>
  )
}
