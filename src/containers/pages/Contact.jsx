import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import {Helmet} from "react-helmet-async"

function Contact() {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <Layout>
                  <Helmet>
      <title>Viperpy | Contacto</title>
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
      <div className="pt-28">
      Contact
      </div>
      <Footer/>
    </Layout>
  )
}

export default Contact