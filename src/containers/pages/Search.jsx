import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import {Helmet} from "react-helmet-async"
import { connect } from "react-redux"
import BlogList from "components/blog/search/BlogList"

// Requests
import { search_blog_list, search_blog_list_page } from "redux/actions/blog/blog"
import { useNavigate, useParams } from "react-router-dom"
import { useState } from 'react'
import { BiSearchAlt } from "react-icons/bi"


function Search({
  posts,
  count,
  next,
  previous,
  search_blog_list,
  search_blog_list_page
}) {

  const params = useParams()
  const term = params.term

  useEffect(()=>{
      window.scrollTo(0,0)
      console.log(term)
      search_blog_list(term)
  },[])

    // SEARCH
    const navigate = useNavigate()
    const [term_search, setTerm_search] = useState("");
    const handleChange = (e) => {
      setTerm_search(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => navigate("/search/" + term_search), 0.2);
        setTerm_search("");
    };


  return (
    <Layout>
      <Helmet>
      <title>Viperpy | Search</title>
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
      <div className="pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="w-full bg-gray-100 mt-2 p-3">
      <div className="grid grid-cols-12">
        <div className="col-span-10">
            <div className="space-x-8 px-2">
              
            </div>
            </div>
        <form onSubmit={(e)=> onSubmit(e)} className="relative col-span-2 mr-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <BiSearchAlt className='mb-1 text-xl text-gray-800'/>
                    </div>
                    <input
                        id='search'
                        name='search'
                        value={term_search}
                        onChange={(e)=>handleChange(e)}
                        type='search'
                        className={`
                            py-1 pl-10 pr-3 
                            block w-full rounded-md
                            border border-white
                            focus:border-gray-200 focus:ring-gray-200
                            focus:outline-none focus:ring-1
                            placeholder-gray-600 focus:placeholder-gray-500
                        `}
                    />
            </form>
      </div>
    </div>
                <div className="mx-auto max-w-6xl my-10">


            <BlogList posts={posts&&posts} get_blog_list_page={search_blog_list_page} count={count} term={term}/>
          </div>
        </div>
      </div>
      <Footer/>
    </Layout>
  )
}

const mapStateToProps = state =>({
  posts: state.blog.search_blog_list,
  count: state.blog.count,
  next : state.blog.next,
  previous: state.blog.previous,

})

export default connect(mapStateToProps,{
  search_blog_list,
  search_blog_list_page
})(Search)