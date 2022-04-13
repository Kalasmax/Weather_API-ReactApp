import Header from "../components/Header/Header"
import Search from "../components/Search"

// bootstrap
import { Container } from "react-bootstrap"

// CONTAINER
const WeatherContainer = () => {

    // HÄR SKICKAS HEMSIDANS INNEHÅLL TILL APP.JS SOM RENDERAR SKITEN
    return(
    <>
        <Header/>

        <Container style={{
            justifyContent: "center"
        }}>
            

            <Search />
        
        </Container>
    </> 

    );
};

export default WeatherContainer;