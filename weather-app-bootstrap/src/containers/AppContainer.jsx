import { useState } from "react"
import Header from "../components/header/Header"
import Search from "../components/search/Search"
import Footer from "../components/footer/Footer"

import { Container, Toast } from "react-bootstrap"
import "./AppContainer.css"

import logo from "../assets/images/guru.jpg"


const WeatherContainer = () => {
    
    
    const [show, setShow] = useState(true);
    // const toggleShow = () => setShow(!show);
    

    return(
    <>   
        <Header/>

            <Toast show={show} onClose={() => setShow(!show)}>
                <Toast.Header>
                    <img
                    src={logo}
                    width="20px"
                    alt=""
                    />
                    <strong className="me-auto">theGuru</strong>
                    <small>Just now</small>
                </Toast.Header>
                <Toast.Body>Welcome! Click the city icon above to display more detailed weather info</Toast.Body>
            </Toast>

            <Container>
                <Search />
            </Container>
        <Footer/>
    </>);
};

export default WeatherContainer;