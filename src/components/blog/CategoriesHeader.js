import { Link, useLocation, useNavigate } from "react-router-dom"


// Icons
import { BiSearchAlt } from "react-icons/bi"

import { useState } from 'react'



function CategoriesHeader({ categories }) {

    const location = useLocation()
    const navigate = useNavigate()

    // SEARCH
    const [term, setTerm] = useState("");
    const handleChange = (e) => {
        setTerm(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => navigate("/search/" + term), 0.2);
        setTerm("");
    };




  return (
    <div className="w-full bg-gray-100 mt-2 p-3">
      <div className="grid grid-cols-12">
        <div className="col-span-10">
            <div className="space-x-8 px-2">

            <Link to='/blog' className={`${location.pathname === '/blog' ? ' text-orange-500 bg-white':'text-gray-900'} py-2 px-4 rounded-md text-lg font-regular border border-transparent transicion duration-500 ease-in-out hover:border-gray-200`}>
                            All
                        </Link>

                
                {
                    categories&&categories.map(category=>(  
                   <>

                   
                  
                    <div class="group inline-block relative" key={category.slug}>
      <Link  to={`/category/${category.slug}`} class="mr-1">  <button
          className={`${location.pathname === `/category/${category.slug}` ? ' text-orange-500 bg-white':'text-gray-900'} py-2 px-4 rounded inline-flex items-center border border-transparent hover:border-gray-300 transicion duration-500 ease-in-out`}
        >
          {category.name}
        </button></Link>
        <ul class="absolute hidden text-gray-700 pt-1 group-hover:block">
          {category.sub_categories&&category.sub_categories.map(sub_category=>(
          <li class="">
                            <Link to={`/category/${sub_category.slug}`}
                            className={`${location.pathname === `/category/${sub_category.slug}` ? ' text-orange-500 bg-white':'text-gray-900'}rounded-t bg-gray-100 hover:bg-white py-2 px-4 block whitespace-no-wrap`}
                            > 
                                <p className="text-sm font-regular text-center">
                            {sub_category.name}
                                </p>
                            </Link>                                
          </li>
                            ))
                            
                            }

        </ul>
      </div>
                       </>
                    ))
                }

            </div>
            </div>
        <form onSubmit={(e)=> onSubmit(e)} className="relative col-span-2 mr-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <BiSearchAlt className='mb-1 text-xl text-gray-800'/>
                    </div>
                    <input
                        id='search'
                        name='search'
                        value={term}
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
  );
}

export default CategoriesHeader;
