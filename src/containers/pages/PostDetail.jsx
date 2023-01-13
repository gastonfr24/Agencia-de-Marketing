import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import moment from "moment"
import { Link } from "react-router-dom"

import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { get_blog } from "redux/actions/blog/blog"

import {Helmet} from "react-helmet-async"
import DomPorify from "dompurify"

import { get_blog_list_category } from "redux/actions/blog/blog"
import avatar from "assets/img/z.jpg"

// Icons
import {
    FaGithub,
    FaFacebook,
    FaLinkedinIn,
  } from 'react-icons/fa';
  import { BsImageAlt } from "react-icons/bs"
import Alert from "components/alerts/alert"



function PostDetail({get_blog, post, get_blog_list_category, posts}) {

    const params = useParams()
    const slug = params.slug

    useEffect(()=>{
        window.scrollTo(0,0)
        get_blog(slug)
    },[])

    useEffect(()=>{
      if(post){
      get_blog_list_category(post.category.slug)}
    },[post])

  return (
    <Layout>     
        <Helmet>
    <title>Viperpy | {post && post.slug=== slug ? post.title:"Blog"}</title>
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
{
    post && post.slug=== slug ?
    <div classNameName="pt-28">
 
    <div className="mt-6">
              <div className="mx-auto">

                  {/*   <!--author--> */}
                 <div className="w-full mx-auto pt-28">
                    

                                        {/* 	<!--post heading--> */}
                                        <div className="ml-8 px-10 lg:mx-12">
                                        <p
                            className="max-w-full mx-auto  text-4xl sm:text-3xl md:text-6xl lg:text-6xl xl:text-6xl font-semibold text-black">{post.title}</p>
                                            </div>
                        {/*     <!--post views--> */}
                            <div className="px-16 lg:mx-12 flex justify-start items-center mt-8 ml-3 pb-10">
                                <p className="text-base text-orange-cus font-semibold rounded-full hover:text-green-500">{post.views}</p>
                                <p className="text-base text-gray-800 font-semibold ml-2">Views</p>
                                <span className=" text-base text-gray-800 font-semibold ml-6 hover:text-orange-cus transition duration-500 ease-in-out"><Link to={`/category/${post.category.slug}`}>{post.category.name}</Link></span> <span className="text-gray-300">&middot;</span> 
                                <span className="text-base text-gray-800 font-semibold ml-6">{moment(post.published).format('LL')}</span> <span className="text-gray-300">&middot;</span>
                                <span className=" text-base text-gray-800 font-semibold ml-6">{post.time_read} min read</span> 

                            
                            </div>


                            <div className=" w-full bg-white  mx-auto md:text-2xl text-gray-900 pt-10 rounded">

                            {/*    	<!--content body--> */}
                                <div className="w-10/12 px-10 lg:mx-6 pb-2">
                                        <p className="lg:p-8 p-4 pb-6 text-semibold">{post.description}</p>
                                </div>
                                    </div>

     {/* Social icons */}
     <div className='hidden lg:flex fixed flex-col top-[30%] left-0'>
        <ul>
        <li className=' w-[60px] h-[60px] flex justify-between items-center mb-2 ml-2 bg-white border border-gray-300 hover:bg-blue-500 transition duration-500 ease-in-out rounded-full text-blue-500 hover:text-white'>
            <a
              className='flex justify-center items-center w-full'
              href='https://mail.google.com/mail/u/0/?fs=1&to=gastonfr24@gmail.com&su=&body=&tf=cm'
            >
            <FaGithub className="text-xl" />
            </a>
          </li>
          <li className=' w-[60px] h-[60px] flex justify-between items-center mb-2 ml-2 bg-white border border-gray-300 hover:bg-blue-500 transition duration-500 ease-in-out rounded-full text-blue-500 hover:text-white'>
            <a
              className='flex justify-center items-center w-full'
              href='https://mail.google.com/mail/u/0/?fs=1&to=gastonfr24@gmail.com&su=&body=&tf=cm'
            >
            <FaFacebook className="text-xl" />
            </a>
          </li>
          <li className=' w-[60px] h-[60px] flex justify-between items-center ml-2 bg-white border border-gray-300 hover:bg-blue-500 transition duration-500 ease-in-out rounded-full text-blue-500 hover:text-white'>
            <a
              className='flex justify-center items-center w-full'
              href='https://mail.google.com/mail/u/0/?fs=1&to=gastonfr24@gmail.com&su=&body=&tf=cm'
            >
            <FaLinkedinIn className="text-xl" />
            </a>
          </li>

        </ul>
      </div>

      <div className=" w-full mt-24 absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white lg:top-[calc(100%-45rem)] sm:top-[calc(100%-35rem)]">
              <img src={post.thumbnail} className='w-full h-full object-cover opacity-10'/>
            </div>

                        <img className="px-10 lg:px-24 object-cover w-full shadow-sm h-full bg-white" src={post.thumbnail}/>


                   {/*  <!--post categories--> */}
                    <div className="px-10 lg:px-24 pt-2 bg-white">
                         {/*    <!--author avator--> */}
                           <div className="font-light text-gray-600">
                              
                                <a href="#" className="flex items-center pt-6 pb-6"><img
                                        src={avatar}
                                        alt="avatar" className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block"/>
                                    <h1 className="font-bold text-gray-700 hover:underline">By {post.author.first_name + ' ' + post.author.last_name}</h1>
                                </a>
                          </div>
                   </div>
                
              {/*      <!--end post header--> */}
                        {/* <!--post content--> */}
             <div className="bg-white px-10 lg:px-24 max-w-full lg:text-xl mx-auto text-gray-900 pt-4 rounded">

          {/*    	<!--content body--> */}
                 <div>
                        <p dangerouslySetInnerHTML={{__html:DomPorify.sanitize(post.content)}} 
                        className="mt-2 py-8 leading-relax"/>
                 </div>

                 

                    </div>
                </div>

              {/*   <!--related posts--> */}

                <h2 className="text-2xl mt-4 text-gray-800 font-bold text-center">Related Posts</h2>


    <div className="grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
        

        <div className="grid grid-cols-12 col-span-12 gap-7 max-w-full lg:px-12">

        {posts&&posts.map((post_cat,index) => (
          <>
{          post_cat.id === post.id ? <></>:
                    <div key={index} className=" flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                    <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                        <img className="object-cover w-full shadow-sm h-full" src={post_cat.thumbnail}/>
                    </a>
                    <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                        <div className="pb-2">
                        <span className="font-medium text-white text-xs bg-orange-400 px-2 py-0.5 rounded-lg"><Link to={`/category/${post_cat.category.slug}`}>{post_cat.category.name}</Link></span> <span className="text-gray-300">&middot;</span> 
                        <span className="mt-2 ml-1 mr-1 font-medium text-gray-800 text-xs">{moment(post_cat.published).format('LL')}</span> <span className="text-gray-300">&middot;</span>
                        <span className="mt-2 font-medium text-gray-800 text-xs">{post_cat.time_read} min read</span> 
                        </div>
                        <h2 className="text-base text-gray-900 font-bold sm:text-lg md:text-xl"><a href="#_">{post_cat.title.length > 40 ? post_cat.title.slice(0,36)+' ...':post_cat.title}</a></h2>
                        <p className="mt-2 text-sm text-gray-500">{post_cat.description.length > 120 ? post_cat.description.slice(0,116)+'...':post_cat.description}</p>
                    </div>
                </div>}
                </>
      ))}



        </div>

    </div>



      </div>
  </div>
</div>:

<>
<div classNameName="pt-28">
 
 <div className="mt-6">
           <div className="">

               {/*   <!--author--> */}
              <div className="w-full pt-28">
                 

                                     {/* 	<!--post heading--> */}
                                     <div className="lg:ml-8 px-10 lg:mx-12 lg:mb-12">
                                     <div className="max-w-full mx-auto h-20 font-semibold grid grid-cols-12 items-center gap-4">
                                     <div className='col-span-5 w-full lg:h-16 h-8 bg-gray-100 rounded-full'></div>
                           <div className='col-span-2 w-full lg:h-16 h-8 bg-gray-100 rounded-full'></div>
                             <div className='col-span-3 w-full lg:h-16 h-8 bg-gray-100 rounded-full'></div>
                                        </div>
                                     <div className="max-w-full mx-auto h-20 font-semibold grid grid-cols-12 items-center gap-4 lg:mt-4">
                           <div className='col-span-2 w-full lg:h-16 h-8 bg-gray-100 rounded-full'></div>
                             <div className='col-span-3 w-full lg:h-16 h-8 bg-gray-100 rounded-full'></div>
                                        </div>

                                        <div className='w-full h-8 lg:mt-8 grid grid-cols-12 gap-x-4 ml-4 items-center'>
                <div className='col-span-2 w-full h-5 bg-gray-100 rounded-full'></div>
                <div className='col-span-2 w-full h-5 bg-gray-100 rounded-full'></div>
                <div className='col-span-2 w-full h-5 bg-gray-100 rounded-full'></div> 
              </div>

                                         </div>

                           <div className=" w-full bg-white  mx-auto md:text-2xl text-gray-900 pt-10 rounded">

                        {/*    	<!--content body--> */}
                            <div className="w-full px-10 lg:mx-6 pb-2">
                            <div className='w-full h-8 mt-8 grid grid-cols-12 gap-x-4 ml-4 items-center'>
                <div className='col-span-6 w-full h-5 bg-gray-100 rounded-full'></div>
                <div className='col-span-2 w-full h-5 bg-gray-100 rounded-full'></div>
                <div className='col-span-3 w-full h-5 bg-gray-100 rounded-full'></div> 
              </div>
              <div className='w-full h-8 mt-8 grid grid-cols-12 gap-x-4 ml-4 items-center'>
                <div className='col-span-8 w-full h-5 bg-gray-100 rounded-full'></div>
                <div className='col-span-1 w-full h-5 bg-gray-100 rounded-full'></div>
                <div className='col-span-2 w-full h-5 bg-gray-100 rounded-full'></div> 
              </div>
              <div className='w-full h-8 mt-8 grid grid-cols-12 gap-x-4 ml-4 items-center'>
                <div className='col-span-2 w-full h-5 bg-gray-100 rounded-full'></div>
                <div className='col-span-2 w-full h-5 bg-gray-100 rounded-full'></div>
                <div className='col-span-2 w-full h-5 bg-gray-100 rounded-full'></div> 
              </div>
                            </div>
                                </div>



   </div>
                  <div className=" lg:px-24 w-11/12 shadow-sm h-96 lg:ml-20 mt-6">
                  <div className='flex items-center justify-center w-full bg-gray-100 h-full'>
                <BsImageAlt className='text-gray-50 h-12 w-12'/>
                </div>
                    </div>

   </div>
</div>
</div>
</>
}
        <Footer/>
        <Alert/>
    </Layout>
  )
}

const mapStateToProps = state => ({
    post : state.blog.post,
    posts: state.blog.blog_list_category
})

export default connect(mapStateToProps,{
    get_blog,
    get_blog_list_category,
})(PostDetail)