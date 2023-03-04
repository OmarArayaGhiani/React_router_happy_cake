import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import {Link} from "react-router-dom"
import Icon_cake from "../Assets/Img/Icon_cake.png"
import Home from "../Assets/Img/Home.png"
import Contact from "../Assets/Img/Contact.png"
import "../Assets/css/navbar.css"

const MyNavbar = () => {
  return (
    <Navbar variant="dark" bg="danger" expand="lg">
      <Container className="p-1">
        <Navbar.Toggle className="ms-3"/>
        <Navbar.Collapse>
          <Nav className="me-auto">
            <div className="ms-3">
              <Link to="/" className="text-light text-decoration-none d-flex align-items-center">
                <img src={Home} alt="" className="icons me-1" /> 
                Home
              </Link>
            </div>
            <div className="ms-3">
              <Link to="contacto" className="text-light text-decoration-none d-flex align-items-center">
                <img src={Contact} alt="" className="icons me-1" />
                Contacto
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
        <div className="me-3 ms-3">
          <Link to="/" className="text-light text-decoration-none d-flex align-items-center">
            <img src={Icon_cake} alt="" target className="icons me-1" />
            Happy Cake
          </Link>
        </div>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
