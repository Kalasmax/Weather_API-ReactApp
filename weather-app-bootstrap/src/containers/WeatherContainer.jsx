import {useState, useEffect} from "react"
import Search from "../components/Search";
import Start from "../components/Start"
import WeatherItem from "../components/WeatherItem"

const API_KEY = "4d717a42ee8e57d713be619959ce81c6"
const startCity = "Stockholm"

var iconToggler = "";

function dayOrNight({Date: dt})
{
    // let time = (dt * 1000).toLocaleTimeString()

    // if(time < "06:00" && time > "18:00")
    // {
    //     iconToggler = "http://openweathermap.org/img/wn/01d@2x.png"
    // }
    // else
    // {
    //     iconToggler = "http://openweathermap.org/img/wn/01n@2x.png"
    // }
}

// CONTAINER
const WeatherContainer = () => {

    const[startWeather, setStartWeather] = useState([]);

    // STARTDEL = STOCKHOLM
    useEffect(() => {

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${startCity}&units=metric&appid=${API_KEY}`

        fetch(url).then(response => response.json()).then(data => {

            console.count(data);
            
            const{dt} = data;
            dayOrNight({Date: dt})

            setStartWeather(data);
        });

    },[]);

    // HÄR SKICKAS HEMSIDANS INNEHÅLL TILL APP.JS SOM RENDERAR SKITEN
    return(<>
                <header><img src={iconToggler} alt=""/><h1>theWeatherGuru</h1> <Search /></header>
             
                <Start item={startWeather}/>     
                <br/>
                
                {/* <Start item={startItem} /> */}
                <br/>
                {/* <WeatherItem /> */}

            </> 

        );
};

export default WeatherContainer;