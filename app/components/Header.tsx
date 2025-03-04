import IPAddressForm from './IPAddressForm'
import IPAddressInfo from './IPAddressInfo'

interface HeaderProps {
  onSearch: (query: string) => void
  isLoading: boolean
}

const Header = ({ onSearch, isLoading }: HeaderProps) => {
  return (
    <header className="relative pt-6 pb-32 text-center bg-cover bg-center">
      <h1 className="text-2xl font-bold text-white mb-6">IP Address Tracker</h1>
      <div className="max-w-xl mx-auto px-6">
        <IPAddressForm onSearch={onSearch} isLoading={isLoading} />
      </div>
      <div className="absolute top-[200px] left-0 w-full px-10 flex justify-center z-10">
        <IPAddressInfo data={null} isLoading={isLoading} />
      </div>
    </header>
  )
}

export default Header
