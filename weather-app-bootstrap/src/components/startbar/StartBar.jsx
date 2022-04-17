import "./StartBar.css"

import cityIcon from "../../assets/images/city.png"
import tempIcon from "../../assets/images/temp.png"
import calendarIcon from "../../assets/images/calendar.png"
import sunriseIcon from "../../assets/images/sunrise.png"
import sunsetIcon from "../../assets/images/sunset.png"

// En startdel av sidan som visar vädret i Stockholm aktuell dag. 
// Följande data skall finnas med Aktuell plats, temperatur, datum och tid

const StartWeather = ({item}) => {
        return(
        <> 
                <ul className="start-bar">
                        {item.name ? 
                                <li className="start-bar-item">
                                        <img src={cityIcon} className="start-bar-icon" alt="icon"/>
                                        {item.name}
                                </li>: null}
                        {item.main ? 
                                <li className="start-bar-item">
                                        <img src={tempIcon} className="start-bar-icon" alt="icon"/>
                                        {Math.floor(item.main.temp)}°C
                                </li>: null}
                        {item.sys ? 
                                <li className="start-bar-item">
                                <img src={calendarIcon} className="start-bar-icon" alt="icon"/>
                                {Date((item.dt) * 1000).slice(0, 24)}
                                </li>: null}
                        {item.weather ?
                                <li className="start-bar-item">
                                        <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} className="start-bar-icon" alt="icon"/>
                                        {item.weather[0].main}
                                </li>: null}
                        {item.sys ? 
                                <li className="start-bar-item">
                                        <img src={sunriseIcon} className="start-bar-icon" alt="icon"/>
                                         {new Date(item.sys.sunrise * 1000).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}
                                </li> : null}
                        {item.sys ?
                                <li className="start-bar-item">
                                        <img src={sunsetIcon} className="start-bar-icon" alt="icon"/>
                                        {new Date(item.sys.sunset * 1000).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}
                        </li> : null}
                </ul>            
        </>)
};

export default StartWeather;