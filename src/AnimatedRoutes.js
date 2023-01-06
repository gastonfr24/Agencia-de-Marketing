// Rutas
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

// Páginas
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import Cases from "containers/pages/Cases";
import Services from "containers/pages/Services";
import About from "containers/pages/About";
import Carrers from "containers/pages/Carrers";
import Blog from "containers/pages/Blog";
import Contact from "containers/pages/Contact";

// Animaciones
import {AnimatePresence} from "framer-motion"
import Category from "containers/pages/Category";
import Search from "containers/pages/Search";
import PostDetail from "containers/pages/PostDetail";

export default function AnimatedRoutes() {
    const location = useLocation()
    return (

      <AnimatePresence>
    <Routes location={location} key={location.pathname}>
    {/* Error 404 */}
    <Route path="*" element={<Error404 />} />

    {/* Pages */}
    <Route path="/" element={<Home />} />
    <Route path="/casos" element={<Cases />} />
    <Route path="/servicios" element={<Services />} />
    <Route path="/nosotros" element={<About />} />
    <Route path="/carreras" element={<Carrers />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:slug" element={<PostDetail />} />
    <Route path="/search/:term" element={<Search />} />
    <Route path="/category/:slug" element={<Category />} />
    <Route path="/contacto" element={<Contact />} />
  </Routes>
      </AnimatePresence>

  )
}
