import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import {Helmet} from "react-helmet-async"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"

function PrivacyTerms() {


    useEffect(() => {
      window.scrollTo(0,0)
    }, [])

  return (
    <Layout>
    <Helmet>
<title>Viperpy | Términos de Servicios y Políticas de Privacidad</title>
<meta
name="description"
content="Viperpy Agency, Diseño Web con Inteligencia Artificial"
/>
<meta name="keywords" content="agencia de marketing, agencia de software, creacion de paginas web, creacion de inteligencia artificial" />
<link rel="canonical" href="https://www.viperpy.com/" />
<meta name="robots" content="all"/>
<meta name="author" content="Viperpy" />
<meta name="publisher" content="Viperpy" />
</Helmet>
<Navbar/>
<section className="py-24 flex items-center min-h-screen justify-center bg-white">
  <div className="mx-auto max-w-[43rem]">
    <div className="text-center">
      <h1 className="mt-3 text-4xl font-gilroy-bold leading-[4rem] tracking-tight text-black">Términos de Servicios y Políticas de Privacidad</h1>
      <p className="mt-3 text-lg leading-8 text-gray-600 font-gilroy-medium mt-10">
      <h2 className="font-gilroy-semibold text-gray-600 mt-20 text-2xl mb-4">
      Términos de servicio
</h2>
      Al utilizar nuestros servicios en Viperpy, usted acepta cumplir con los siguientes términos de servicio:
<ul className="text-left list-disc">
    <li>
Usted acepta proporcionarnos información precisa y actualizada sobre su proyecto de desarrollo web.
    </li>
    <li>
Usted acepta pagar todas las tarifas aplicables por nuestros servicios de acuerdo con los términos del acuerdo entre nosotros.
    </li>
    <li>
Usted acepta no utilizar nuestros servicios para ningún propósito ilegal o no autorizado.
    </li>
    <li>
Usted acepta cumplir con todas las leyes y regulaciones aplicables en su uso de nuestros servicios.
    </li>
</ul>
<h2 className="font-gilroy-semibold text-gray-600 mt-32 text-2xl mb-4">
Política de privacidad:
</h2>
<p className="text-left mb-6">
En Viperpy, valoramos y respetamos su privacidad. La presente política describe cómo recolectamos, utilizamos y protegemos la información que usted proporciona a través de nuestra página web.
</p>
<ul className="text-left list-disc">
    <li>
Recopilamos información sobre usted cuando se pone en contacto con nosotros a través de nuestro formulario de contacto o correo electrónico.
    </li>
<li>
Utilizamos esta información para responder a sus preguntas y proporcionarle información sobre nuestros servicios.
</li>
<li>
No compartimos su información con terceros sin su consentimiento, salvo cuando sea requerido por ley.
</li>
<li>
Utilizamos medidas de seguridad para proteger su información contra acceso no autorizado, alteración, divulgación o destrucción.
</li>
</ul>
      </p>
    </div>

    <div className="mt-6 flex items-center justify-center gap-4">
 </div>
  </div>
</section>
<Footer/>
</Layout>
  )
}

export default PrivacyTerms