import IPAddressForm from './IPAddressForm'

interface HeaderProps {
  onSearch: (query: string) => void
  isLoading: boolean
}

const Header = ({ onSearch, isLoading }: HeaderProps) => {
  return (
    <header
      className="relative pt-6 pb-32 text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/pattern-bg-desktop.png')" }}
    >
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">
        IP Address Tracker
      </h1>
      <div className="max-w-xl mx-auto px-6">
        <IPAddressForm onSearch={onSearch} isLoading={isLoading} />
      </div>
    </header>
  )
}

export default Header
