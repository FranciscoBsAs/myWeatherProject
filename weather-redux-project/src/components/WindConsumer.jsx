import { useSelector, useDispatch } from "../store/MainStore.jsx";

import { SelectWindUnit } from "../store/weatherReducer/SelectorsWeather.jsx";

import { setWindUnit } from "../store/weatherReducer/MainWeatherReducer.jsx";

import "./WeatherConsumer.css"


function WindConsumer ( { windSpeedDefault } ) {

    const theWindyDispatch = useDispatch()  //es un hook windyDispatch = dispatch ventoso

    // no se usa useState porque es una operacion global, por eso se usa con hooks Redux 

    const windUnit = useSelector( SelectWindUnit )
    
    
    function handleChange ( e ) {
        theWindyDispatch( setWindUnit( e.target.value ) )
    }


    const windSpeed = (

        windUnit === "km/h"
            ? ( windSpeedDefault * 3.6 ).toFixed(2)
            : windSpeedDefault 

    )

    return(

        <div>
            
                { windSpeed } {windUnit} {" "}

            <select value={ windUnit } onChange={handleChange} >
                
                <option value="m/s"> m/s </option>
                <option value="km/h"> km/h </option>

            </select>
        </div>

    )

}

export default WindConsumer