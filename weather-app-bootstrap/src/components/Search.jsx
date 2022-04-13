import{useState, useRef} from "react"
import WeatherItem from "./WeatherItem";
import { Form, Button } from "react-bootstrap"

const API_KEY = "4d717a42ee8e57d713be619959ce81c6"

// Search component
const Search = () => {

    const searchValue = useRef()

    const [searchWeather, setSearchWeather] = useState({ name: "", weather: "", main: "", sys: "", timezone: "" });

    const getSearchItem = () => {

        // Hämtar värdet från textboxen (namn på stad)
        let city = searchValue.current.value;

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric$&appid=${API_KEY}`

        fetch(url).then(response => response.json()).then(data => {

            console.log(data);

            setSearchWeather(data);
            
        }, []);
    };

    

    return(
    <>
        <Form className="m-5">
            <Form.Control onKeyDown={getSearchItem} style={{width: 350}} ref={searchValue} type="text" placeholder="City name" />     
            <WeatherItem item={searchWeather} />     
        </Form>
    </>
    );
};

export default Search;