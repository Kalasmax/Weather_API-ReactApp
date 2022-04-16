import WeatherCard from "./SearchWeatherCard"
import { Card, CardGroup } from "react-bootstrap"

const WeatherGroup = ({item}) => {

    console.log("Inne i WeatherGroup");
    console.log(item);

    if(item === "null")
    {
        console.log("Inne i IF satsen");
        console.log(item);
    }
    else
    {
        console.log("Inne i ELSE satsen");
        console.log(item);

        var list = item.daily.slice(0, 5).map(element => {
            
            return (<WeatherCard item={element}></WeatherCard>)

        });

        console.log("MAPPAD LISTA");
        console.log(list)
    }
    
    return(
    <>
        <CardGroup className="mt-5"> 
            {/* {item.daily ? <h1>{item}</h1> : null} */}
            {list}            
        </CardGroup>  
    </>
    )

}

export default WeatherGroup;

