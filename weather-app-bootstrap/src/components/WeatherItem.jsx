// I PARAMETERN: 
// props för hela objektet (props.item) // eller {item} för att ta ut en property från objektet direkt (typkänsligt)

// En startdel av sidan som visar vädret i Stockholm aktuell dag. 
// Följande data skall finnas med Aktuell plats, temperatur, datum och tid

const WeatherItem = ({item}) => {

    return(<>

            {/* KRAV FÖR STARTDEL  */}
            <h3>{item.name}</h3>
            {item.main ? <p>Temp: {Math.floor(item.main.temp)}°C</p> : null}
            {item.sys ? <p>Date: {new Date((item.dt + item.timezone) * 1000).toUTCString([], {day: "2-digit", month: "2-digit", year: "2-digit", hour: "2-digit", minute: "2-digit"})}</p> : null}
            
            {/* DETALJER */}
            {item.weather ? <p>Weather: {item.weather[0].main}</p> : null}
            {item.sys ? <p>Sunrise: {new Date(item.sys.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p> : null}
            {item.sys ? <p>Sunset: {new Date(item.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p> : null}
            {item.weather ? <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="icon" /> : null}

        </>);
};

export default WeatherItem;
