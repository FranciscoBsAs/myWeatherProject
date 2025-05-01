import "./Consumer1.css"

import { useDispatch, useSelector } from "../store/MainStore.jsx";    //el hook useDispatch permite enviar acciones al store de Redux (es una función que devuelve dispatch).

import { setTemperatureUnitReducer, setUserCity } from "../store/weatherReducer/MainWeather.jsx";

import { SelectTemperature } from "../store/weatherReducer/SelectorsWeather.jsx";

import { useState } from "react";

import { useTempUnitChosenHook } from "./TempUnitLogicConvert.jsx";

import "./WeatherConsumer.css"


function UserConsumer () {

    const theDispatch = useDispatch()   //Se Inicializa cierto dispatch con useDispatch(), lo que permite enviar acciones, como setUserName()


    //const tempUnitChosen = useSelector( SelectTemperature )

    // proxima linea es el equivalente via hook personalizado de const tempUnitChosen = useSelector( SelectTemperature )
    
    const tempUnitChosen = useTempUnitChosenHook() 
 

    const [ inputCity, setInputCity ] = useState( "" )

    function handleInputChange( { target } ) {
        setInputCity( target.value ) 
    }

    function handleTemperatureUnitChange ( ev ) {
        
        theDispatch(  setTemperatureUnitReducer( ev.target.value )  );

    }

    function handleClickBotton () {
        inputCity.trim() !== ""
            ? ( theDispatch( setUserCity( inputCity.trim() ) ) )
            :   null
    }
    

    return(
        <div>
            <h5 className="weatherInfo" > Examples: Regularly, Ushuaia is a cold city and Formosa is a hot one </h5>
            <br/>
            <input
                type="text"
                placeholder="Ingresar una localidad de Argentina"
                value={ inputCity }
                onChange={ handleInputChange }
                className="inputCity"
            ></input>
             
             &nbsp;

             <button onClick={ handleClickBotton } className="sendButton" >
                Check the weather
             </button>
             <br/>
             <select value={tempUnitChosen} onChange={ handleTemperatureUnitChange } >
                <option value="°C"> Celsius (°C) </option>
                <option value="°F"> Fahrenheit (°F) </option>
                <option value="K"> Kelvin (K) </option>
             </select>

        </div>
    )

}

export default UserConsumer