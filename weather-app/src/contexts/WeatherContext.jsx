import {useState, createContext} from "react"
import CardGroup from "../components/cardgroup/CardGroup"

export const WeatherContext = createContext();

const API_KEY = "4d717a42ee8e57d713be619959ce81c6"

const WeatherProvider = (props) => {

    const [result, setResult] = useState("null");
    const [city, setCity] = useState([]);

    const getWeather = (searchValue) => {
        
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&cnt=1&units=metric&appid=${API_KEY}`

        fetch(url)
        .then(response => response.json())
        .then(data => {

            setCity([data.city.name, city])

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${API_KEY}`)
            .then(response => response.json())
            .then(data => {setResult(data)})

        }, []); 
    };

    return(
    <>
        <WeatherContext.Provider value={{result, city, getWeather}}>
            {props.children}
        </WeatherContext.Provider>

        <CardGroup item={[{result}, {city}]}/>
    </>);
};

export default WeatherProvider;
