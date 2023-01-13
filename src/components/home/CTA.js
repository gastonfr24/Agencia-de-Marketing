import React from 'react'
import { Link } from 'react-router-dom'

function CTA() {
  return (
    <div className="bg-white">
      <div className="mx-auto lg:mx-2 max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">
          <span className="block font-gilroy-bold">¿Listo para ser parte?</span>
          <span className="block text-orange-cus font-gilroy-semibold">Cuéntanos tu idea.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
          <Link
              to="/contacto"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-cus px-5 py-3 text-base font-gilroy-medium text-white hover:bg-orange-400"
            >
              Contacto
              </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-gilroy-medium text-orange-cus hover:bg-orange-50"
            >
              Ver proyectos
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA