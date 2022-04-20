import { useContext, useRef} from "react"
import { WeatherContext } from "../../contexts/WeatherContext"
import { Form } from "react-bootstrap"
import "./Search.css";

const SearchBar = () => {

    const{getWeather} = useContext(WeatherContext);

    const searchValue = useRef();

    return(
    <>
        <Form.Control className="search-bar" type="text" placeholder="Enter a city name" ref={searchValue}
        onKeyDown={
            (e) => e.key === "Enter" && getWeather(searchValue.current.value)
        }/>
    </>);
};

export default SearchBar;
