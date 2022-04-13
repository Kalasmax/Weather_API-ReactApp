import {useState, useEffect} from "react"

import { Navbar, Card } from "react-bootstrap"
import logo from "../../images/icon-nav.jpg"
import Start from "../StartWeather"

const API_KEY = "4d717a42ee8e57d713be619959ce81c6"
const startCity = "Stockholm"

const Header = () => {
    
    const[startWeather, setStartWeather] = useState([]);

    // STARTDEL = STOCKHOLM
    useEffect(() => {

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${startCity}&units=metric&appid=${API_KEY}`

        fetch(url).then(response => response.json()).then(data => {

            console.count(data);

            setStartWeather(data);
        });

    },[]);

    return(
    <>

        <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="m-2" href="/">
            <img
                alt="theWeatherGuru logo"
                src={logo}
                width="60"
                height="60"
                className="d-inline-block align-top"
            />{''}
            <h2 className="m-2 d-inline-block align-bottom">theWeatherGuru</h2>
        </Navbar.Brand>               
        </Navbar>

        <Card>
            <Card.Body> <Start item={startWeather}/>  </Card.Body>
        </Card>
        
    </>
    );

};

export default Header;