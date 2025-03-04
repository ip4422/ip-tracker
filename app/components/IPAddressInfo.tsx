import { IPData } from '~/types/ip-data'

interface IPAddressInfoProps {
  data?: IPData
  isLoading: boolean
}

const IPAddressInfo = ({ data, isLoading }: IPAddressInfoProps) => {
  return (
    <div className="min-w-[80%] bg-white rounded-lg shadow-md p-6 lg:p-8 max-w-6xl flex flex-wrap gap-6 text-center md:text-left">
      {isLoading ? (
        <div className="w-full text-center py-4">
          <div className="animate-pulse flex justify-center">
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
      ) : data ? (
        <div className="w-full flex flex-col md:flex-row text-center md:text-left gap-x-6">
          <div className="w-full md:flex-1 px-6 md:border-r md:border-gray-300">
            <h2 className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">
              IP Address
            </h2>
            <p className="text-lg lg:text-xl font-bold text-gray-800">
              {data.ip}
            </p>
          </div>

          <div className="w-full md:flex-1 px-6 md:border-r md:border-gray-300 sm:pt-6">
            <h2 className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">
              Location
            </h2>
            <p className="text-lg lg:text-xl font-bold text-gray-800">
              {data.location.city}, {data.location.region}
              <br className="md:hidden" />
              <span className="md:ml-1">{data.location.postalCode}</span>
            </p>
          </div>

          <div className="w-full md:flex-1 px-6 md:border-r md:border-gray-300 sm:pt-6">
            <h2 className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">
              Timezone
            </h2>
            <p className="text-lg lg:text-xl font-bold text-gray-800">
              UTC {data.location.timezone}
            </p>
          </div>

          <div className="w-full md:flex-1 px-6 sm:pt-6">
            <h2 className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">
              ISP
            </h2>
            <p className="text-lg lg:text-xl font-bold text-gray-800">
              {data.isp}
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full text-center py-4">
          <p className="text-gray-500">
            Enter an IP address or domain to see details
          </p>
        </div>
      )}
    </div>
  )
}

export default IPAddressInfo
