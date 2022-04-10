import './App.css';
import WeatherContainer from './containers/WeatherContainer';
import logo from "./images/icon-nav.jpg"

//Bootstrap imports
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return( 

        <>
        <WeatherContainer />  


        </>
        

        // <>

        // <Navbar bg="dark" variant="dark">
        //   <Container>
        //     <Navbar.Brand href="#home">
        //       <img
        //         alt="theWeatherGuru logo"
        //         src={logo}
        //         width="50"
        //         height="50"
        //         className="d-inline-block align-top"
        //       />{' '}
        //     </Navbar.Brand>
        //       <Nav className="me-auto">
        //       <Nav.Link href="#home">Hem</Nav.Link>
        //       <Nav.Link href="#add-auction">Väder</Nav.Link>
              
        //     </Nav>


          

        //   </Container>
        // </Navbar>


        

        ); 
}

export default App;

