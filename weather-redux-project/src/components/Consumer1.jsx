import "./Consumer1.css"

import { useDispatch } from "../store/MainStore.jsx";    //el hook useDispatch permite enviar acciones al store de Redux (es una función que devuelve dispatch).

import { setUserCity } from "../store/weatherReducer/MainWeather.jsx";

import { useState } from "react";

import "./WeatherConsumer.css"


function UserConsumer () {

    const theDispatch = useDispatch()   //Se Inicializa cierto dispatch con useDispatch(), lo que permite enviar acciones, como setUserName()

    const [ inputCity, setInputCity ] = useState( "" )

    function handleInputChange( { target } ) {
        setInputCity( target.value ) 
    }

    function handleClickBotton () {
        inputCity.trim() !== ""
            ? ( theDispatch( setUserCity( inputCity.trim() ) ) )
            :   null
    }
    

    return(
        <div>
            <h5 className="weatherInfo" > Examples: Regularly, Bariloche is a cold city and Formosa is a hot one </h5>
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

        </div>
    )

}

export default UserConsumer