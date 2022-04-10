import{useState, useRef} from "react"
import WeatherItem from "./WeatherItem";

const API_KEY = "4d717a42ee8e57d713be619959ce81c6"

// Search component
const Search = () => {

    const searchValue = useRef()

    const [searchWeather, setSearchWeather] = useState({ name: "", weather: "", main: "", sys: "", timezone: "" });

    const getSearchItem = () => {

        // Hämtar värdet från textboxen (namn på stad)
        let city = searchValue.current.value;

        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric$&appid=${API_KEY}`

        fetch(url).then(response => response.json()).then(data => {

            console.log(data);

            setSearchWeather(data);
            
        }, []);
    };

    return(<>
                <label>Enter a city name:</label>
                <input type="text" ref={searchValue} placeholder="e.g. Madrid" />
                <button onClick={getSearchItem}>Sök</button>
                <WeatherItem item={searchWeather} />
            </>);
};

export default Search;