import { AiOutlineFieldTime } from "react-icons/ai"
import { RiPencilRuler2Line } from "react-icons/ri"
import { BiSupport } from "react-icons/bi"
import { IoExtensionPuzzleOutline } from "react-icons/io5"

const incentives = [
  {
    name: 'Desarrollo ágil y escalable',
    imageSrc: AiOutlineFieldTime,
    description: "Nuestros programadores python trabajan de forma ágil para asegurar que tus proyectos se entreguen en plazo y cumplan tus expectativas",
  },
  {
    name: 'Diseño personalizado',
    imageSrc: RiPencilRuler2Line,
    description: "Diseñadores de alta calidad, que trabajan para crear un diseño único y atractivo para tu página web",
  },
  {
    name: 'Soporte técnico contínuo',
    imageSrc: BiSupport,
    description:
      "Ofrecemos soporte técnico continuo para ayudarte a mantener tu página web funcionando de manera óptima",
  },
  {
    name: 'Soluciones a medida',
    imageSrc: IoExtensionPuzzleOutline,
    description:
      "Entendemos que cada negocio es único, por eso ofrecemos soluciones a medida para adaptarnos a las necesidades específicas de cada cliente",
  },
]

export default function Incentives() {
  return (
    <div className="bg-white">
      <div className="mx-8 lg:mx-auto lg:max-w-7xl py-24 sm:py-32 lg:px-4 ">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="w-full xl:grid xl:grid-cols-3 xl:space-x-28">
            <h2 className="lg:text-[40px] text-3xl font-gilroy-semibold tracking-wide text-gray-900 leading-tight">
            ¿Por qué elegir la agencia de productos digitales Viperpy?
            </h2>
            <p className="xl:col-span-2 mt-8 text-gray-800 leading-7 font-gilroy-medium w-9/12 text-center lg:text-left mx-auto">
            Al elegir a Viperpy, podrás contar con un equipo dedicado y profesional 
            que te ayudará a crear una página web que se adapte a tus necesidades
             y te ayude a alcanzar tus objetivos de negocio. <div className="mt-2">
            No importa si estás buscando una página web para promocionar tus productos o servicios,
             o si deseas crear una plataforma en línea para tu negocio,
             Viperpy tiene la experiencia y los conocimientos necesarios para ayudarte a lograrlo.</div>
            </p>
          </div>
          <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-2  lg:w-8/12 mx-2">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block mr-20">
                <div className="sm:flex-shrink-0">
                  <incentive.imageSrc className="h-16 w-16 text-orange-400" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-2xl leading-tight font-gilroy-bold text-gray-900 my-4">{incentive.name}</h3>
                  <p className="mt-2 leading-7 text-gray-800 font-gilroy-medium">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}