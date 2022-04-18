import { Card } from "react-bootstrap"
import "./Card.css"

import tempIcon from "../../assets/images/temp.png"
import tempMinIcon from "../../assets/images/mintemp.png"
import tempMaxIcon from "../../assets/images/maxtemp.png"
import calendarIcon from "../../assets/images/calendar.png"
import sunriseIcon from "../../assets/images/sunrise.png"
import sunsetIcon from "../../assets/images/sunset.png"

// STANDARD: Aktuell plats, Temperatur, Datum och Tid
// DETALJ: Min/Max Temperatur, Datum, Ikon för väderförhållande

const WeatherCard = ({item}) => {

    return(
    <>
        <Card className="weather-card">    
            <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} className="card-main-icon" alt="icon"/>
                <Card.Body>
                    <Card.Text>
                        <img src={calendarIcon} className="card-icon" alt="icon"/> {new Date((item.dt) * 1000).toString().slice(0, 21) }
                    </Card.Text>

                    {/* <hr/> */}
                    {/* <Card.Text className="temp">                     
                    <small className="text-muted"> now ── min ── max </small>           
                    </Card.Text>  */}
                    <Card.Text className="temp">      
                        <p><img src={tempIcon} className="card-icon-big" alt="icon"/>{Math.floor(item.temp.day)}°C</p>
                        <p><img src={tempMinIcon} className="card-icon-big" alt="icon"/>{Math.floor(item.temp.min)}°C</p>
                        <p><img src={tempMaxIcon} className="card-icon-big" alt="icon"/>{Math.floor(item.temp.max)}°C</p>                               
                    </Card.Text> 
                    <Card.Text>
                        <small className="text-muted">
                            <img src={sunriseIcon} className="card-icon" alt="icon"/>
                            {new Date(item.sunrise * 1000).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}
                        </small>
                        <small> → </small>
                        <small className="text-muted">
                            <img src={sunsetIcon} className="card-icon" alt="icon"/>
                            {new Date(item.sunset * 1000).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}
                        </small>
                    </Card.Text>
                </Card.Body>
        </Card>     
    </>)
};

export default WeatherCard;