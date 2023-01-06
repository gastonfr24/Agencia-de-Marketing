import HorizontalCard from "../HorizontalCard"


import SmallSetPagination from "components/pagination/SmallSetPaginationSearch"

function BlogList({posts, get_blog_list_page, count, term}) {
  console.log(term)
  return (
    <div className="overflow-hidden px-8 bg-white ">
    <ul role="list" className="divide-y space-y-8 gap-8  divide-gray-200">
      {posts&&posts.map((post,index) => (
        <HorizontalCard data={post} key={index}/>
      ))}
    </ul>
<SmallSetPagination list_page={get_blog_list_page} list={posts} count={count} term={term}/>
  </div>
  )
}

export default BlogList