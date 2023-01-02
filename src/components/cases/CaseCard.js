

function CaseCard({data}) {
  return (
    <div key={data.title} className="group flex flex-col overflow-hidden rounded-lg shadow-lg">
    <div className="flex-shrink-0">
      <img className="h-96 w-full object-cover group-hover:scale-95 transition duration-300 ease-in-out" src={data.imageUrl} alt="" />
    </div>
    <div className="flex flex-1 flex-col justify-between bg-white p-6">
      <div className="flex-1">
        <p className="text-xl font-medium text-gray-800">
          <a href={data.category.href} className="hover:underline">
            {data.category.name}
          </a>
        </p>
        <a href={data.href} className="mt-2 block">
          <p className="lg:text-4xl pt-4 pb-6 text-2xl font-semibold text-gray-900 group-hover:text-orange-cus transition duration-500 ease-in-out">{data.title}</p>
          <p className="mt-3 text-lg space-y-2 leading-9 text-gray-500">{data.description}</p>
        </a>
      </div>

    </div>
  </div>
  )
}

export default CaseCard