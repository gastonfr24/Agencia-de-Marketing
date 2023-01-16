import { Typewriter } from "react-simple-typewriter"
import { Link } from "react-router-dom"
import background from "assets/img/back.jpg"

function Header() {
  
    return (
    <main>
        <div className="relative px-6 ">
        <div className="lg:mx-2 max-w-full xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
        
              <div>
              <h1 className="text-4xl font-gilroy-semibold tracking-tight pb-16  
             sm:text-5xl
              ">
              Agency for <span> </span>
              <span className="text-orange-cus font-gilroy-semibold">
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

                <ul className="flex lg:gap-8 gap-3 pt-10">
                  <li className="font-gilroy-semibold inline-flex border-b-2 border-transparent hover:border-orange-cus transition duration-500 ease-in-out">
                    <Link to='/servicios/#' className=" leading-8 text-black sm:text-center">
                    Web
                    </Link>
                  </li>
                  <li className="font-gilroy-semibold inline-flex border-b-2 border-transparent hover:border-orange-cus transition duration-500 ease-in-out">
                    <Link to='/servicios/#' className=" leading-8 text-black sm:text-center">
                    Apps
                    </Link>
                  </li>
                  <li className="font-gilroy-semibold inline-flex border-b-2 border-transparent hover:border-orange-cus transition duration-500 ease-in-out">
                    <Link to='/servicios/#' className=" leading-8 text-black sm:text-center">
                    Machine Learning
                    </Link>
                  </li>
                  <li className="font-gilroy-semibold inline-flex border-b-2 border-transparent hover:border-orange-cus transition duration-500 ease-in-out">
                    <Link to='/servicios/#' className=" leading-8 textblack0 sm:text-center">
                    Marketing
                    </Link>
                  </li>
                  <li className="font-gilroy-semibold inline-flex border-b-2 border-transparent hover:border-orange-cus transition duration-500 ease-in-out">
                    <Link to='/servicios/#' className=" leading-8 text-black sm:text-center">
                    Consultorías
                    </Link>
                  </li>
                </ul>

              </div>
              <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu blur-none overflow-hidden bg-white lg:top-[calc(100%-39rem)] sm:top-[calc(100%-35rem)]">
              <img src={background} className='w-full h-full object-cover opacity-30'/>
            </div>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Header