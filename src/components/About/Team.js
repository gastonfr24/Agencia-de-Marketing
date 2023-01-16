import mifoto from "assets/img/img2.jpg"
import { SiGithub } from "react-icons/si"

const people = [
    {
      name: 'Gaston Franco',
      role: 'Back-end Developer',
      imageUrl:
      mifoto,
      twitterUrl: 'https://github.com/gastonfr24',
      linkedinUrl: 'https://www.linkedin.com/in/gaston-franco/',
    },
    // More people...
  ]
  
  export default function Team() {
    return (
      <div className="bg-white">
        <div className="mx-2 lg:mx-12 max-w-full py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-gilroy-bold tracking-tight sm:text-4xl text-orange-cus">Conoce a los miembros del equipo</h2>
              <p className="text-xl text-gray-500 leading-7 font font-gilroy-medium">
              En Viperpy, estamos orgullosos de tener un equipo altamente capacitado y dedicado de desarrolladores de software y diseñadores.
               Cada uno de nosotros tiene habilidades únicas y experiencia en el desarrollo web,
                lo que nos permite trabajar de manera colaborativa y eficiente.
               Conozcan un poco más sobre cada uno de nosotros a continuación.
              </p>
            </div>
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="rounded-lg object-cover shadow-lg" src={person.imageUrl} alt="" />
                    </div>
  
                    <div className="space-y-2">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{person.name}</h3>
                        <p className="text-orange-cus">{person.role}</p>
                      </div>
                      <ul role="list" className="flex space-x-5">
                        <li>
                          <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <SiGithub className="h-5 w-5"/>
                          </a>
                        </li>
                        <li>
                          <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  