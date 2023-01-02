import Feature from "components/Carrers/Feature"
import LogoCloud from "components/Carrers/LogoCloud"
import PositionList from "components/Carrers/PositionList"
import Promo from "components/Carrers/Promo"
import Testimonial from "components/Carrers/Testimonial"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import {Helmet} from "react-helmet-async"

function Carrers() {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  
  return (
    <Layout>
                  <Helmet>
      <title>Viperpy | Carreras</title>
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
      <Promo/>
      <Testimonial/>
      <LogoCloud/>
      <Feature/>
      <PositionList/>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Carrers