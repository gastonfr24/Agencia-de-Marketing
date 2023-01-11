const incentives = [
    {
      name: 'Equipo ágil de programadores Python',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
      description: "As we started from design many years ago, we are ranked on Dribbble as 1 of the 10 best design studios around the world. We care about the design and front-end face of the project. As a digital product development agency, we believe in beautiful software",
    },
    {
      name: 'Equipo ágil de programadores JS',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
      description: "Our digital product company's multifunctional team brings together designers, software developers, QA experts, and illustrators. Applying our multifaceted team's skillset, we will help you overcome the trickiest challenges during the exciting product development journey",
    },
    {
      name: 'Diseñadores de la mejor calidad que trabajan junto con el equipo de desarrollo.',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
      description:
        "We thrive in a situation when we have to start our work ASAP - implemented agile methodologies (Scrum, Kanban) plus processes and tools that we have in place allow us for smooth and painless completion of any project",
    },
    {
      name: 'Diseñadores de la mejor calidad que trabajan junto con el equipo de desarrollo.',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
      description:
        "We thrive in a situation when we have to start our work ASAP - implemented agile methodologies (Scrum, Kanban) plus processes and tools that we have in place allow us for smooth and painless completion of any project",
    },
  ]
  
  export default function Incentives() {
    return (
      <div className="bg-white">
        <div className="mx-8 lg:mx-auto lg:max-w-7xl py-24 sm:py-32 lg:px-4 ">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="lg:text-5xl text-2xl font-semibold tracking-wide text-gray-900 leading-tight">
              ¿Por qué elegir la agencia de productos digitales Viperpy?
              </h2>
              <p className="mt-8 text-gray-800 leading-snug">
                At the beginning at least, but then we realized we could make a lot more money if we kinda stopped caring
                about that. Our new strategy is to write a bunch of things that look really good in the headlines, then
                clarify in the small print but hope people don't actually read it.
              </p>
            </div>
            <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-2  lg:w-7/12 mx-2">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block mr-16">
                  <div className="sm:flex-shrink-0">
                    <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-2xl leading-tight font-medium text-gray-900 my-4">{incentive.name}</h3>
                    <p className="mt-2 leading-relaxed text-gray-800">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }