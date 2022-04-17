import Header from "../components/header/Header"
import Search from "../components/search/Search"
import Footer from "../components/footer/Footer"

import { Container } from "react-bootstrap"

const WeatherContainer = () => {

    // HÄR SKICKAS HEMSIDANS INNEHÅLL TILL APP.JS SOM RENDERAR SKITEN
    return(
    <>   
        <Header/>
        
        <Container>
            <Search />
        </Container>

        <Footer/>
    </>);
};

export default WeatherContainer;