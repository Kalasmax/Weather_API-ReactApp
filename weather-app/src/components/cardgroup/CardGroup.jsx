import WeatherCard from "../card/Card"
import { Card, CardGroup } from "react-bootstrap"
import "./CardGroup.css"

const WeatherGroup = ({item}) => {

    if(item[0].result !== "null")
    {
        var cityName = item[1].city[0];

        var list = item[0].result.daily.slice(0, 6).map(element => {
            
            return (<WeatherCard item={element}></WeatherCard>)
        });
    }
    
    return(
    <>
        <Card className="city-card">
            <Card.Text>
                <a href={"https://en.wikipedia.org/wiki/" + cityName} target="_blank" rel="noopener noreferrer">
                    {cityName}
                </a> 
            </Card.Text>
        </Card>
        <CardGroup>
            {list}            
        </CardGroup>  
    </>)
}

export default WeatherGroup;