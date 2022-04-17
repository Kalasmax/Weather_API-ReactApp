import {useState, useEffect} from "react"
import { Navbar } from "react-bootstrap"
import "./Header.css"
import logo from "../../assets/images/icon-nav.jpg"

import StartBar from "../startbar/StartBar"

const API_KEY = "4d717a42ee8e57d713be619959ce81c6"
const startCity = "Stockholm"

// Header component
const Header = () => {

    const[startWeather, setStartWeather] = useState("");

    // React hook useEffect = ta fram ett värde vid onLoad
    useEffect(() => {

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${startCity}&units=metric&appid=${API_KEY}`

        fetch(url).then(response => response.json()).then(data => {setStartWeather(data)});
        console.log("start")

        const interval = setInterval(() => {
            fetch(url).then(response => response.json()).then(data => {setStartWeather(data)});
            console.log("uppdatering per sekund")
        }, 1000);  
        return () => clearInterval(interval);

    }, [])   

    return(
    <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <img
                    alt="theWeatherGuru logo"
                    src={logo}
                    width="65"
                    height="60"
                    className="d-inline-block align-center"
                    id="brand-img"
                />
                <h2 className="m-2 d-inline-block align-bottom" id="brand-title">theWeatherGuru</h2>
            </Navbar.Brand>               
        </Navbar>

        <StartBar item={startWeather}/>
    </>
    );
};

export default Header;
