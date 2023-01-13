

function CaseCard({data}) {
  return (
    <div key={data.title} className="group flex flex-col overflow-hidden rounded-lg shadow-lg">
    <div className="flex-shrink-0">
      <img className="sm:h-96 w-full object-cover group-hover:scale-95 transition duration-300 ease-in-out" src={data.imageUrl} alt="" />
    </div>
    <div className="flex flex-1 flex-col justify-between bg-white sm:p-6">
      <div className="flex-1">
        {/* <p className="text-xl font-medium text-gray-800">
          <a href={data.category.href} className="hover:underline sm:block hidden">
            {data.category.name}
          </a>
        </p> */}
        <a href={data.href} className="sm:mt-2 block">
          <p className="sm:text-4xl pt-4 sm:pb-6 pb-2 text-xl font-semibold text-gray-900 group-hover:text-orange-cus transition duration-500 ease-in-out">{data.title}</p>
          <p className="sm:mt-3 sm:text-lg text-sm space-y-2 leading-9 text-gray-500">{data.description}</p>
        </a>
      </div>

    </div>
  </div>
  )
}

export default CaseCard