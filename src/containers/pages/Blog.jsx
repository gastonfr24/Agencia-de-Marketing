import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { connect } from "react-redux";

// Requests
import { get_categories } from "redux/actions/categories/categories";
import { get_blog_list } from "redux/actions/blog/blog";
import { get_blog_list_page } from "redux/actions/blog/blog";
import CategoriesHeader from "components/blog/CategoriesHeader";
import BlogList from "components/blog/BlogList";
import SqueletonCard from "components/blog/loaders/SqueletonCard";

function Blog({
  get_categories,
  get_blog_list,
  get_blog_list_page,
  categories,
  posts,
  count,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
    get_categories();
    get_blog_list();
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Viperpy | Blog</title>
        <meta
          name="description"
          content="Viperpy Agency, Diseño Web con Inteligencia Artificial"
        />
        <meta
          name="keywords"
          content="agencia de marketing, agencia de software, creacion de paginas web, creacion de inteligencia artificial"
        />
        <link rel="canonical" href="https://www.viperpy.com/" />
        <meta name="robots" content="all" />
        <meta name="author" content="Viperpy" />
        <meta name="publisher" content="Viperpy" />
      </Helmet>
      <Navbar />
      <div className="pt-24">
        <CategoriesHeader categories={categories&&categories} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="mx-auto max-w-6xl my-10">
                  {
                    posts ? 
                    <>
                    <BlogList posts={posts&&posts} get_blog_list_page={get_blog_list_page} count={count}/>
                    </>
                    :
                    <div className="overflow-hidden px-8">
                    <ul role="list" className="">
                      <SqueletonCard/>
                      <SqueletonCard/>
                      <SqueletonCard/>
                    </ul>
                  </div>
                  }
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  posts: state.blog.blog_list,
  count: state.blog.count,
  next: state.blog.next,
  previous: state.blog.previous,
});

export default connect(mapStateToProps, {
  get_categories,
  get_blog_list,
  get_blog_list_page,
})(Blog);
