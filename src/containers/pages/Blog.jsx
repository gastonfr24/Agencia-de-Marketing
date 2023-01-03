import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import {Helmet} from "react-helmet-async"
import { get_categories } from "redux/actions/categories/categories"
import { connect } from "react-redux"


function Blog({get_categories, categories}) {
  useEffect(() => {
    window.scrollTo(0,0)
    get_categories()
    get_categories_blog_list()
  }, [])

  return (
    <Layout>
                  <Helmet>
      <title>Viperpy | Blog</title>
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
      Blog
      </div>
      <Footer/>
    </Layout>
  )
}

const mapStateToProps = state =>({
  categories: state.categories.categories
})

export default connect(mapStateToProps,{
  get_categories
})(Blog)