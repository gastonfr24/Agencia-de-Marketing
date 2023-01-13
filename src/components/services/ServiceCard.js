import { Link } from "react-router-dom"


function ServiceCard({post}) {
  return (
    <div className='group w-full relative p-8 h-96 lg:h[150pm] bg-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300 ease-in-out'>
        <div className='w-full'>
            <div className="">
            <post.icon className='text-6xl text-gray-500'/>
            <h2 className="text-xl font-semibold text-gray-900 pt-8">
                {post.title}
            </h2>
            <p className="text-lg font-regular text-gray-500 pt-4">
                {post.description}
            </p>
            </div>
            <div className=" absolute bottom-0 left-0 p-8">                
            <Link to={post.href} className="group-hover:text-orange-cus transition duration-300 ease-in-out items-end text-xl font-semibold text-gray-900 pt-8">
                Learn More
            </Link>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard