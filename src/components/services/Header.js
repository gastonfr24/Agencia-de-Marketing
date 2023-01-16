import { Typewriter } from "react-simple-typewriter"
import { Link } from "react-router-dom"
import background from "assets/img/back.jpg"

function Header() {
  
    return (
    <main>
        <div className="relative px-6 lg:px-6">
          <div className="mx-auto lg:mx-2 w-full xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
        
              <div className="w-2/3">
                <h1 className="text-4xl pb-16 font-gilroy-semibold tracking-tight sm:text-5xl">
                Nuestros servicios
                </h1>

                <p className="mt-6 text-xl leading-8 text-black font-gilroy-medium">
                En Viperpy ofrecemos una amplia variedad de servicios de desarrollo web para ayudar a los negocios a tener una presencia en línea sólida y escalable. Desde diseño web personalizado hasta desarrollo de aplicaciones web, SEO, marketing digital y soporte técnico continuo, nuestro equipo está comprometido a proporcionar soluciones a medida para cada cliente.
                </p>

              </div>

            </div>
          </div>
        </div>
      </main>
  )
}

export default Header