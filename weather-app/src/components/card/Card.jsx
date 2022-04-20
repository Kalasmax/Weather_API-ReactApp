import { Card } from "react-bootstrap"
import "./Card.css"

const WeatherCard = ({item}) => {

    return(
    <>
        <Card className="weather-card">    
            <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} className="card-main-icon" alt="icon"/>
                <Card.Body>
                    <Card.Text className="card-date">
                        📅 {new Date((item.dt) * 1000).toDateString()}
                        <br/>
                        🕛 {new Date((item.dt) * 1000).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit" })}
                    </Card.Text>

                    <Card.Text className="card-temp">      
                        <p>🌡 {Math.floor(item.temp.day)}° </p>
                        {Math.floor(item.temp.min)}° / {Math.floor(item.temp.max)}°
                        <br/>
                        <small> Feels like {Math.floor(item.feels_like.day)}°</small>                                                      
                    </Card.Text> 
                    
                    <Card.Text>
                        <small>
                         ☀ {new Date(item.sunrise * 1000).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}
                        </small>
                        <small> → </small>
                        <small>
                         🌑 {new Date(item.sunset * 1000).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}
                        </small>
                    </Card.Text>
                </Card.Body>
        </Card>     
    </>)
};

export default WeatherCard;