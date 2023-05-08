import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/MainPage/Navbar";
import Home from "./components/MainPage/Home";
import ProductList from "./components/MainPage/ProductList";
import About from "./components/MainPage/About";
import Contact from "./components/MainPage/Contact";
import Footer from "./components/MainPage/Footer";
import AdminIfo from "./components/AdminPage/AdminIfo";
import AddItems from "./components/AdminPage/AddItems";
import ItemsList from "./components/AdminPage/ItemsList"; 

function App() {

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  
  return (
    <div >
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <About />
                <ProductList />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
          path="/Admin"
          element={
            <>
              <AdminIfo />
              <AddItems />
              <ItemsList />
            </>
          }
        />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
