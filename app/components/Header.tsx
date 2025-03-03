const Header = () => {
  return (
    <header
      className="relative pt-6 pb-32 text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/pattern-bg-desktop.png')" }}
    >
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">
        IP Address Tracker
      </h1>
      <div className="max-w-xl mx-auto px-6">IP Address Form component</div>
    </header>
  )
}

export default Header
