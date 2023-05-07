import Navbar from "./components/Navbar"
import Home from "./components/Home"
import ProductList from "./components/ProductList"
import About from "./components/About"
// import Types from './components/Types'
// import Contact from "./components/Contact"
// import Footer from "./components/Footer"

function App() {

  return (
    <div className="bg-[#dad7cd]">
    <Navbar/>
    <Home/>
    <About/>
    <ProductList />
    {/* <Contact/> */}
    {/* <Footer/> */}
    </div>
  )
}

export default App
