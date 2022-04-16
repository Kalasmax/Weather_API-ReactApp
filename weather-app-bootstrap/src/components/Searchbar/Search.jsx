import{useState, useRef} from "react"
import WeatherGroup from "../../views/SearchWeatherGroup"
import { Form } from "react-bootstrap"

const API_KEY = "4d717a42ee8e57d713be619959ce81c6"

// Search component
const SearchBar = () => {

    const searchValue = useRef();

    const [searchWeather, setSearchWeather] = useState("null");

    const getSearchWeather = (e) => {

        if(e.keyCode === 13)
        {
            let city = searchValue.current.value;
            searchValue.current.value = "";

            let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=1&units=metric&appid=${API_KEY}`

            fetch(url)
            .then(response => response.json())
            .then(data => {
                
                // const{timezone_offset, daily} = data;
                console.log("Första fetchen")
                console.log(data);

                fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${API_KEY}`)
                .then(response => response.json())
                .then(data => { 
                    
                    // const{timezone_offset, daily} = data;
                    // let item = {Timezone_offset: timezone_offset, Daily: daily};      
                    setSearchWeather(data)

                    console.log("Andra fetchen")
                    console.log(data);
                
                })

            }, []);
        }

    };

    return(
    <>
        <Form.Control onKeyUp={getSearchWeather} ref={searchValue} type="text" placeholder="Enter a city name" /> 

        <WeatherGroup item={searchWeather}/>
    </>
    );
};

export default SearchBar;