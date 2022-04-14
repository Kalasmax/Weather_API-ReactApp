import{useState, useRef} from "react"
import Search from "../../views/SearchWeather"
import { Form } from "react-bootstrap"

const API_KEY = "4d717a42ee8e57d713be619959ce81c6"

// Search component
const SearchBar = () => {

    const searchValue = useRef();

    const [searchWeather, setSearchWeather] = useState("");

    const getSearchWeather = (e) => {

        if(e.keyCode === 13)
        {
            console.log("Du klickade enter")

            let city = searchValue.current.value;

            let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric$&appid=${API_KEY}`

            fetch(url).then(response => response.json()).then(data => {

                console.log(data);

                setSearchWeather(data);
                
            }, []);
        }

    };

    return(
    <>
        <Form.Control onKeyUp={getSearchWeather} ref={searchValue} type="text" placeholder="Enter a city name" /> 

        {/* <Search item={searchWeather}/> */}
    </>
    );
};

export default SearchBar;