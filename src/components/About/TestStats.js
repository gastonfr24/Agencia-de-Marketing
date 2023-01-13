import logo from "assets/img/s.png"
const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '5' },
    { label: 'Beta Users', value: '521' },
    { label: 'Raised', value: '$25M' },
  ]
  
  export default function TestStats() {
    return (
      <div className="pb-40">
          <div className="w-full grid grid-cols-2">
              <div className="mx-auto">
                <img src={logo} alt="" className="w-80"/>
              </div>

              <div>
              <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                    <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                    <dd className="text-3xl font-bold tracking-tight text-gray-900">{stat.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <a href="#" className="text-base font-medium text-orange-cus">
                  Learn more about how we're changing the world
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
              </div>
          </div>
          </div>
    )
  }