import {useState, useRef} from "react"
import { Form } from "react-bootstrap"
import "./Search.css";

import CardGroup from "../cardgroup/CardGroup"

const API_KEY = "4d717a42ee8e57d713be619959ce81c6"

const SearchBar = () => {

    const searchValue = useRef();

    const [result, setResult] = useState("null");
    const [city, setCity] = useState("");

    const [input, setInput] = useState({search_val: ""})

    const handle = (e) => {
        const newinput={...input}
        newinput[e.target.id] = e.target.value
        setInput(newinput)
    }

    const getSearchWeather = (e) => {

        if(e.keyCode === 13)
        {
            let city = searchValue.current.value;
            searchValue.current.value = "";

            let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=1&units=metric&appid=${API_KEY}`

            fetch(url)
            .then(response => response.json())
            .then(data => {

                setCity(data.city.name)

                fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${API_KEY}`)
                .then(response => response.json())
                .then(data => {setResult(data)})

            }, []);
        }

    };

    return(
    <>
        <Form.Control className="search-bar" type="text" placeholder="Enter a city name"
        onKeyUp={getSearchWeather} 
        ref={searchValue} 
        onChange={(e)=>handle(e)}
        value={input.search_val}
        id="search_val"/>
         
        <CardGroup item={[{result}, {city}]}/>
    </>);
};

export default SearchBar;

/* GOOGLE API TEST

import Autocomplete from "react-google-autocomplete";
const API_KEY2 = "AIzaSyCpO16j7Jh5gWxzCQvjFLPRA6j_c1UKF9k"


fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${newinput}&types=(cities)&key=${API_KEY2}`, {
    method: "GET",
    mode: "no-cors",
    cache: "no-cache",
    credentials: 'same-origin',
    headers: {
        "Content-Type": "application/json"
    },
redirect: "follow",
referrerPolicy: "no-referrer",
}); 


fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${newinput}&types=(cities)&key=${API_KEY2}`, {
    mode: "no-cors",
    headers: {
        "Content-Type": "application/json"
    },
    referrerPolicy: "no-referrer",
})
.then(response => console.log(response))
*/