import { Typewriter } from "react-simple-typewriter"
import { Link } from "react-router-dom"
import background from "assets/img/back.jpg"

function Header() {
  
    return (
    <main>
        <div className="relative px-6 lg:px-6">
          <div className="mx-auto lg:mx-2 w-full xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
        
              <div className="w-full lg:w-3/4">
                <h1 className="text-4xl pb-16 font-gilroy-semibold tracking-tight sm:text-5xl">
                Sobre Nosotros
                </h1>

                <p className="mt-2 text-xl leading-8 text-black font-gilroy-medium">
                En Viperpy, nos enfocamos en brindar servicios de desarrollo web de alta calidad para ayudar a los negocios a tener una presencia en línea sólida.
                 Conozca más sobre nuestro equipo y cómo podemos ayudar a su negocio a alcanzar el éxito en línea.
                </p>

              </div>

            </div>
          </div>
        </div>
      </main>
  )
}

export default Header