import { useEffect, useRef, useState } from 'react'
import IPAddressForm from './IPAddressForm'
import IPAddressInfo from './IPAddressInfo'
import { IPData } from '~/types/ip-data'

interface HeaderProps {
  onSearch: (query: string) => void
  data?: IPData
  isLoading: boolean
}

const Header = ({ onSearch, data, isLoading }: HeaderProps) => {
  const formRef = useRef<HTMLDivElement>(null)
  const [infoTop, setInfoTop] = useState(0)

  useEffect(() => {
    if (formRef.current) {
      // Calculate top position for IPAddressInfo dynamically
      const formHeight =
        formRef?.current?.offsetHeight + formRef?.current?.offsetTop
      setInfoTop(formHeight + 24) // 24px is a margin for spacing
    }
  }, [])

  return (
    <header className="relative pt-6 pb-32 text-center bg-cover bg-center">
      <h1 className="text-2xl font-bold text-white mb-6">IP Address Tracker</h1>
      <div ref={formRef} className="max-w-xl mx-auto px-6">
        <IPAddressForm onSearch={onSearch} isLoading={isLoading} />
      </div>
      <div
        className="absolute left-0 w-full px-10 flex justify-center z-10"
        style={{ top: `${infoTop}px` }}
      >
        <IPAddressInfo data={data} isLoading={isLoading} />
      </div>
    </header>
  )
}

export default Header
