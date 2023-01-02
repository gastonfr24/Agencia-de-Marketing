// Rutas
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import AnimatedRoutes from "AnimatedRoutes";

// Helmet
import {Helmet, HelmetProvider} from "react-helmet-async"

// Redux Store
import store from "store";
import { Provider } from "react-redux";


function App() {
  return (
    <HelmetProvider>
      <Helmet>
      <title>Viperpy | Sotfware Agency</title>
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
    <Provider store={store}>
      <Router>

    <AnimatedRoutes/>

      </Router>
    </Provider>

    </HelmetProvider>
  );
}

export default App;
