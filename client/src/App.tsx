import { Routes, Route, useLocation } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar} from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { Checkout } from "./pages/Checkout"

function App() {
  const location = useLocation();

  return (
  <ShoppingCartProvider>
    {location.pathname === '/' ? null : <Navbar />}
    {/* <Container className="mb-4"> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    {/* </Container> */}
  </ShoppingCartProvider>
  ) 
}

export default App
