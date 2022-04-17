import Header from "../components/header/Header"
import Search from "../components/search/Search"
import Footer from "../components/footer/Footer"

import { Container} from "react-bootstrap"
import "./AppContainer.css"


const WeatherContainer = () => {

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