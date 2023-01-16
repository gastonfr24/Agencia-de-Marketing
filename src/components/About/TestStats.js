import logo from "assets/img/s.png"
import { FaPython } from "react-icons/fa"
import { SiDjango, SiJavascript, SiReact, SiPostgresql } from "react-icons/si"


const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '5' },
    { label: 'Beta Users', value: '521' },
    { label: 'Raised', value: '$25M' },
  ]
  
  export default function TestStats() {
    return (
      <div className="pb-40">
          <div className="w-full lg:grid grid-cols-2 ">
              <div className="mx-auto w-1/2 my-auto">
                <img src={logo} alt="" className="w-80"/>
              </div>

              <div>
              <div className="lg:mr-8 mx-6 lg:mx-0 mt-6 lg:mt-0 w-full">
                <h2 className="font-gilroy-semibold text-5xl mb-4 text-orange-cus text-center lg:text-left"> Viperpy</h2>
                  <p className="leading-8 lg:text-lg mt-6 font-gilroy-medium">
                  Somos una agencia de desarrollo web creada en el 2023 con un equipo pequeño pero altamente capacitado de desarrolladores de software.
                   A pesar de ser una agencia joven, estamos comprometidos a brindar servicios de desarrollo web de alta calidad a nuestros clientes.
                  </p>

                <h2 className="text-orange-cus lg:text-lg italic font-gilroy-medium my-4">
                "En Viperpy, somos un equipo joven y actualizado, 
                comprometido a brindar servicios de desarrollo web de alta calidad utilizando las últimas tecnologías."
                </h2>

                  <p className="leading-8 lg:text-lg mt-6 font-gilroy-medium">
                  A pesar de ser un equipo pequeño, trabajamos de manera colaborativa y eficiente para garantizar
                   que cada proyecto sea entregado a tiempo y cumpla con las expectativas de nuestros clientes. 
                   Además, estamos constantemente actualizando nuestros conocimientos
                   y habilidades para garantizar que estamos utilizando las últimas y mejores tecnologías en el mercado.
                  </p>
            </div>



              </div>
          </div>
<div className="w-10/12 mx-auto lg:mt-52 mt-20">
          <h2 className="text-3xl text-center font-gilroy-bold text-orange-cus">
            Nuestras Tecnologías - Desarrollo web de vanguardia
            </h2>
            <p className="w-10/12 text-xl mt-10 leading-9 font-gilroy-medium text-center text-gray-800 mx-auto">
            En Viperpy, utilizamos las tecnologías más actuales y eficientes para garantizar el éxito de cada proyecto.
             Entre las tecnologías que utilizamos destacan Python, Django, React, JavaScript, PostgreSQL, Tailwind CSS, Redux, Axios.
              Con estas herramientas de vanguardia y más,
             podemos ofrecerle a su negocio una presencia en línea sólida, escalable y personalizada a sus necesidades específicas.
            </p>
            <div className="bg-white">
      <div className="mx-auto max-w-7xl pt-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <FaPython className="text-6xl text-gray-400" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <SiDjango className="text-6xl text-gray-400" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <SiJavascript className="text-6xl text-gray-400" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
          <SiReact className="text-6xl text-gray-400" />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
          <SiPostgresql className="text-6xl text-gray-400" />
          </div>
        </div>
      </div>
    </div>
            </div>
          </div>
    )
  }