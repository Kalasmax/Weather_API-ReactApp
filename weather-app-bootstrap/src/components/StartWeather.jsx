// I PARAMETERN: 
// props för hela objektet (props.item) // eller {item} för att ta ut en property från objektet direkt (typkänsligt)

// En startdel av sidan som visar vädret i Stockholm aktuell dag. 
// Följande data skall finnas med Aktuell plats, temperatur, datum och tid

const StartWeather = ({item}) => {

return(
<> 
        <ul>
        <h4 style={{display: "inline"}}>{item.name}</h4>

        {/* KRAV FÖR STARTDEL  */}
        {item.main ? <li style={{display: "inline"}}>Temp: {Math.floor(item.main.temp)}°C</li> : null}
        {item.sys ? <li style={{display: "inline"}}>Date: {new Date((item.dt) * 1000).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})}</li> : null}
        {item.weather ? <li style={{display: "inline"}}>Weather: {item.weather[0].main}</li> : null}
        {item.sys ? <li style={{display: "inline"}}>Sunrise: {new Date(item.sys.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</li> : null}
        {item.sys ? <li style={{display: "inline"}}>Sunset: {new Date(item.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</li> : null}
        {item.weather ? <li style={{display: "inline"}}><img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="icon" /> </li> : null}

        </ul>            
</>)
};

export default StartWeather;