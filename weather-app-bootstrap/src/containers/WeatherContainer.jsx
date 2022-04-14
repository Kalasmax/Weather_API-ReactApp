import Header from "../components/Header/Header"
import Search from "../components/Searchbar/Search"
import Footer from "../components/Footer/Footer"

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