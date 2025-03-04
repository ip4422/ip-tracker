import React, { useState } from 'react'

interface IPAddressFormProps {
  onSearch: (query: string) => void
  isLoading: boolean
}

const IPAddressForm = ({ onSearch, isLoading }: IPAddressFormProps) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query.trim())
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full rounded-lg overflow-hidden shadow-md"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for any IP address or domain"
        className="flex-grow py-3 px-4 outline-none text-gray-700 cursor-pointer"
        aria-label="IP Address or Domain"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="bg-black hover:bg-gray-800 transition-colors p-4 flex items-center justify-center"
        aria-label="Search"
      >
        <img
          src="/images/icon-arrow.svg"
          alt="Arrow"
          className={`h-3 w-3 ${isLoading ? 'opacity-50' : ''}`}
        />
      </button>
    </form>
  )
}

export default IPAddressForm
