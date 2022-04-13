import { Card } from "react-bootstrap"

const WeatherItem = ({item}) => {

    return(<>

            <Card className="text-center m-5">
                <Card.Header className="text-muted">Result</Card.Header>
                <Card.Body>
                
                        <Card.Text>
                        <h3>{item.name}</h3>
                        
                                {/* KRAV FÖR STARTDEL  */}
                                {item.main ? <p>Temp: {Math.floor(item.main.temp)}°C</p> : null}
                                {item.sys ? <p>Date: {new Date((item.dt) * 1000).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})}</p> : null}
                                {item.weather ? <p>Weather: {item.weather[0].main}</p> : null}
                                {item.sys ? <p>Sunrise: {new Date(item.sys.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p> : null}
                                {item.sys ? <p>Sunset: {new Date(item.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p> : null}
                                {item.weather ? <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="icon" /> : null}
                        
                        </Card.Text>
                </Card.Body>
            </Card>
            
        </>)
};

export default WeatherItem;
