import { IPData } from "~/types/ip-data"

interface IPAddressInfoProps {
  data: IPData | null
  isLoading: boolean
}

const IPAddressInfo = ({ data, isLoading }: IPAddressInfoProps) => {
  return (
    <div className="min-w-[80%] bg-white rounded-lg shadow-md p-6 lg:p-8 max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
      {isLoading ? (
        <div className="col-span-full text-center py-4">
          <div className="animate-pulse flex justify-center">
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
      ) : data ? (
        <>
          <div className="lg:border-r lg:border-gray-300 lg:pr-6">
            <h2 className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">
              IP Address
            </h2>
            <p className="text-lg lg:text-xl font-bold text-gray-800">
              {data.ip}
            </p>
          </div>

          <div className="lg:border-r lg:border-gray-300 lg:px-6">
            <h2 className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">
              Location
            </h2>
            <p className="text-lg lg:text-xl font-bold text-gray-800">
              {data.location.city}, {data.location.region}
              <br className="md:hidden" />
              <span className="md:ml-1">{data.location.postalCode}</span>
            </p>
          </div>

          <div className="lg:border-r lg:border-gray-300 lg:px-6">
            <h2 className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">
              Timezone
            </h2>
            <p className="text-lg lg:text-xl font-bold text-gray-800">
              UTC {data.location.timezone}
            </p>
          </div>

          <div className="lg:pl-6">
            <h2 className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">
              ISP
            </h2>
            <p className="text-lg lg:text-xl font-bold text-gray-800">
              {data.isp}
            </p>
          </div>
        </>
      ) : (
        <div className="col-span-full text-center py-4">
          <p className="text-gray-500">
            Enter an IP address or domain to see details
          </p>
        </div>
      )}
    </div>
  )
}

export default IPAddressInfo
