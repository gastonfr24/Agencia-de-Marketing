import { Typewriter } from "react-simple-typewriter"
import { Link } from "react-router-dom"
import background from "assets/img/back.jpg"

function Header() {
  
    return (
    <main>
        <div className="relative px-6 lg:px-6">
          <div className="mx-auto lg:mx-2 w-full xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
        
              <div className="w-1/2">
                <h1 className="text-4xl pb-16 font-gilroy-semibold tracking-tight sm:text-5xl">
                 Casos de Estudio
                </h1>

                <p className="mt-2 text-xl leading-8 text-black font-gilroy-medium">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.
                </p>

              </div>
              <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu blur-none overflow-hidden bg-white lg:top-[calc(100%-39rem)] sm:top-[calc(100%-30rem)]">
              <img src={background} className='w-full h-full object-cover opacity-30'/>
            </div>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Header