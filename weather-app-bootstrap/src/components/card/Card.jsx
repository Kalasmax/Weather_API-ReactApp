import { Card } from "react-bootstrap"

import cityIcon from "../../styles/images/city.png"
import tempIcon from "../../styles/images/temp.png"
import tempMinIcon from "../../styles/images/mintemp.png"
import tempMaxIcon from "../../styles/images/maxtemp.png"
import calendarIcon from "../../styles/images/calendar.png"
import sunriseIcon from "../../styles/images/sunrise.png"
import sunsetIcon from "../../styles/images/sunset.png"



// STANDARD: Aktuell plats, Temperatur, Datum och Tid
// DETALJ: Min/Max Temperatur, Datym, Ikon för väderförhållande

const WeatherCard = ({item}) => {

    console.log("Inne i WeatherCard")
    console.log({item})

    return(<>

        <Card>    

            <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} style={{width:"37.5%"}} alt="icon" />
                
                <Card.Body>

                    <Card.Text>
                    <img src={calendarIcon} style={{width:"30px"}} alt="icon" /> {new Date((item.dt) * 1000).toString().slice(0, 21) }
                    </Card.Text>

                    <hr/>

                    <Card.Text>
                    <img src={tempIcon} style={{width:"30px"}} alt="icon" />{Math.floor(item.temp.day)}°C 
                    <img src={tempMinIcon} style={{width:"30px"}} alt="icon" />{Math.floor(item.temp.min)}°C
                    <img src={tempMaxIcon} style={{width:"30px"}} alt="icon" />{Math.floor(item.temp.max)}°C
                    </Card.Text> 
                        
                    

                    <small className="text-muted"><img src={sunriseIcon} style={{width:"30px"}} alt="icon" />{new Date(item.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</small>
                    <small> → </small>
                    <small className="text-muted"><img src={sunsetIcon} style={{width:"30px"}} alt="icon" />{new Date(item.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</small>
                
                </Card.Body>
        </Card>     
    </>)
};

export default WeatherCard;

// {/* <Card className="text-center m-5">
//                 <Card.Img variant="top" src={sunsetIcon}/>
//                 <Card.Header className="text-muted">Result</Card.Header>
//                 <Card.Body>
                
//                         <Card.Text>
//                         <h3>{item.name}</h3>
                        
//                                 <li style={{display: "inline"}}><strong>Current:</strong></li>
//                                 <li className="start-bar-item" style={{display: "inline"}}><img src={cityIcon} style={{width:"45px"}} alt="icon" />{item.name}</li>
//                                 {item.main ? <li className="start-bar-item" style={{display: "inline"}}><img src={tempIcon} style={{width:"45px"}} alt="icon" /> {Math.floor(item.main.temp)}°C</li> : null}
//                                 {item.sys ? <li className="start-bar-item" style={{display: "inline"}}><img src={calendarIcon} style={{width:"45px"}} alt="icon" /> {Date((item.dt) * 1000).slice(0, 24)}</li> : null}
//                                 {item.weather ? <li className="start-bar-item" style={{display: "inline"}}><img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} style={{width:"50px"}} alt="icon" />{item.weather[0].main} </li> : null}
//                                 {item.sys ? <li className="start-bar-item" style={{display: "inline"}}><img src={sunriseIcon} style={{width:"45px"}} alt="icon" /> {new Date(item.sys.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</li> : null}
//                                 {item.sys ? <li className="start-bar-item" style={{display: "inline"}}><img src={sunsetIcon} style={{width:"45px"}} alt="icon" /> {new Date(item.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</li> : null}

                        
//                         </Card.Text>
//                 </Card.Body>
//             </Card>
// */}
            