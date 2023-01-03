import { Typewriter } from "react-simple-typewriter"
import { Link } from "react-router-dom"
import background from "assets/img/back.jpg"

function Header() {
  
    return (
    <main>
        <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
        
              <div>
              <h1 className="text-4xl font-semibold tracking-tight pb-16  sm:text-7xl">
              Agency for <span> </span>
              <span className="text-orange-cus">
                  <Typewriter
                        words={['Dreamers', 'Creators', 'You!']}
                        loop={0}
                        cursor
                        cursorColor=""
                        cursorStyle='|'
                        typeSpeed={120}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        // onLoopDone={handleDone}
                        // onType={handleType}
                        
                    />
                    </span>
              </h1>

                <ul className="flex lg:gap-8 gap-3 pt-12">
                  <li className="inline-flex border-b-2 border-transparent hover:border-orange-cus transition duration-500 ease-in-out">
                    <Link to='/servicios/#' className="mt-6 text-lg lg:text-2xl font-medium leading-8 text-gray-700 sm:text-center">
                    Web
                    </Link>
                  </li>
                  <li className="inline-flex border-b-2 border-transparent hover:border-orange-cus transition duration-500 ease-in-out">
                    <Link to='/servicios/#' className="mt-6 text-lg lg:text-2xl font-medium leading-8 text-gray-700 sm:text-center">
                    Apps
                    </Link>
                  </li>
                  <li className="inline-flex border-b-2 border-transparent hover:border-orange-cus transition duration-500 ease-in-out">
                    <Link to='/servicios/#' className="mt-6 text-lg lg:text-2xl font-medium leading-8 text-gray-700 sm:text-center">
                    Videojuegos
                    </Link>
                  </li>
                  <li className="inline-flex border-b-2 border-transparent hover:border-orange-cus transition duration-500 ease-in-out">
                    <Link to='/servicios/#' className="mt-6 text-lg lg:text-2xl font-medium leading-8 text-gray-700 sm:text-center">
                    Marketing
                    </Link>
                  </li>
                  <li className="inline-flex border-b-2 border-transparent hover:border-orange-cus transition duration-500 ease-in-out">
                    <Link to='/servicios/#' className="mt-6 text-lg lg:text-2xl font-medium leading-8 text-gray-700 sm:text-center">
                    Consultorías
                    </Link>
                  </li>
                </ul>

              </div>
              <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu blur-none overflow-hidden bg-white lg:top-[calc(100%-45rem)] sm:top-[calc(100%-35rem)]">
              <img src={background} className='w-full h-full object-cover opacity-40'/>
            </div>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Header