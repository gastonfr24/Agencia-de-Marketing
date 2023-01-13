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
                About Us
                </h1>

                <p className="mt-2 text-xl leading-8 text-black font-gilroy-medium">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.
                </p>

              </div>

            </div>
          </div>
        </div>
      </main>
  )
}

export default Header