import './App.css'
import UserConsumer from './components/Consumer1'
import WeatherConsumer from './components/WeatherConsumer'
import { TheProvider } from './store/MainStore'

function App() {

  return (
    <div>
      <p> The API source: " api.openweathermap.org/data/2.5/weather?q=t,AR& " </p>
      <br></br>
      <TheProvider>
        <UserConsumer></UserConsumer>
        <WeatherConsumer></WeatherConsumer>
      </TheProvider>
    </div>
  )
}

export default App
