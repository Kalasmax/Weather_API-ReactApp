import cityIcon from "../images/city.png"
import tempIcon from "../images/temp.png"
import calendarIcon from "../images/calendar.png"
import sunriseIcon from "../images/sunrise.png"
import sunsetIcon from "../images/sunset.png"


// I PARAMETERN: 
// props för hela objektet (props.item) // eller {item} för att ta ut en property från objektet direkt (typkänsligt)

// En startdel av sidan som visar vädret i Stockholm aktuell dag. 
// Följande data skall finnas med Aktuell plats, temperatur, datum och tid

const StartWeather = ({item}) => {

return(
<> 
        <ul className="start-bar">
        <li style={{display: "inline"}}>Current:</li>
        <li className="start-bar-item" style={{display: "inline"}}><img src={cityIcon} style={{width:"45px"}} alt="icon" />{item.name}</li>
        {item.main ? <li className="start-bar-item" style={{display: "inline"}}><img src={tempIcon} style={{width:"45px"}} alt="icon" /> {Math.floor(item.main.temp)}°C</li> : null}
        {item.sys ? <li className="start-bar-item" style={{display: "inline"}}><img src={calendarIcon} style={{width:"45px"}} alt="icon" /> {new Date((item.dt) * 1000).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})}</li> : null}
        {item.weather ? <li className="start-bar-item" style={{display: "inline"}}><img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} style={{width:"50px"}} alt="icon" />{item.weather[0].main} </li> : null}
        {item.sys ? <li className="start-bar-item" style={{display: "inline"}}><img src={sunriseIcon} style={{width:"45px"}} alt="icon" /> {new Date(item.sys.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</li> : null}
        {item.sys ? <li className="start-bar-item" style={{display: "inline"}}><img src={sunsetIcon} style={{width:"45px"}} alt="icon" /> {new Date(item.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</li> : null}

        </ul>            
</>)
};


export default StartWeather;