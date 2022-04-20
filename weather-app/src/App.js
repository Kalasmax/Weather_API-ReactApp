import './App.css';
import AppContainer from "./containers/AppContainer";
import TodoProvider from "./contexts/WeatherContext"

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  return( 
  <> 
    <TodoProvider>
      <AppContainer /> 
    </TodoProvider>
  </>); 
}

export default App;