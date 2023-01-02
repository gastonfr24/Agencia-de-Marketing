import { Typewriter } from "react-simple-typewriter"
import { Link } from "react-router-dom"
import background from "assets/img/back.jpg"

function Header() {
  
    return (
      <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-2 lg:mx-12 max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
      
            <div>
              <h1 className="text-4xl pb-16 font-medium tracking-tight sm:text-7xl">
               About Us
              </h1>

              <p className="mt-12 text-2xl leading-8 text-black">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                amet fugiat veniam occaecat fugiat aliqua.
              </p>

            </div>
            <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu blur-none overflow-hidden bg-white lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">
            <img src={background} className='w-full h-full object-cover opacity-40'/>
          </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Header