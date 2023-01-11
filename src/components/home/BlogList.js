import moment from "moment"
import { useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { get_blog_list } from "redux/actions/blog/blog"
import d from "assets/img/d.jpg"  

  function classNames(...classes) {

    return classes.filter(Boolean).join(' ')
  }
  
  function BlogList({get_blog_list, posts}) {

    useEffect(() => {
      get_blog_list()
    
    }, [])
    
    return (
      <>
            <div className="">
        <div className="mx-8 lg:mx-auto lg:max-w-7xl py-24 sm:py-32 lg:px-4 ">
          <div className="mx-auto max-w-2xl lg:max-w-none"></div>
                    <div className="max-w-5xl mb-8">
              <h2 className="lg:text-5xl text-2xl font-semibold tracking-wide text-gray-900 leading-tight">
              Nuestas prácticas y conocimientos
              </h2>

            </div>


      <div className="grid grid-cols-12 gap-7 max-w-full lg:px-12 pt-10">

        {posts&&posts.map((post_cat,index) => (
          <>{
            <div className="col-span-12 
            md:col-span-6">
                   <div key={index} className="rounded-xl group flex-col items-start overflow-hidden shadow-sm  hover:scale-95 transition-transform duration-1000">

                    <a href="#_" className="block transition duration-1000 ease-out transform group-hover:scale-125">
                        <img className="object-cover w-full shadow-sm h-full" src={post_cat.thumbail}/>
                    </a>


                </div>
                <div className="relative flex flex-col items-start px-6 bg-white py-7 rounded-b-2xl">

<h2 className="text-base text-gray-900 font-semibold sm:text-lg md:text-2xl group-hover:"><a href="#_">{post_cat.title.length > 70 ? post_cat.title.slice(0,66)+' ...':post_cat.title}</a></h2>
</div>
                </div>
                }
                </>
      ))}
            </div>
        </div>
      </div>
      </>
    )
  }

  const mapStateToProps = (state) => ({
    posts: state.blog.blog_list,

  });
  
  export default connect(mapStateToProps, {
    get_blog_list,
  })(BlogList);

  