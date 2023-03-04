import {BrowserRouter, Routes, Route} from "react-router-dom"
import MyNavbar from "./Components/Navbar"
import Home from "./Views/Home"
import Contact from "./Views/Contact"
import NoFound from "./Views/NoFound"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<NoFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
