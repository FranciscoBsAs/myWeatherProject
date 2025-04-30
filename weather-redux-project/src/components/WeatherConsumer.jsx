import { useSelector } from "../store/MainStore.jsx";

import { SelectUserCity, selectWeatherIcon } from "../store/weatherReducer/SelectorWeather.jsx";
import { useEffect, useState } from "react";
import "./WeatherConsumer.css"

//import { port } from "../../../weatherServer/weatherAPI.js";


function WeatherConsumer () {

    const cityActual = useSelector( SelectUserCity )    // invoca ese espacio de memoria correspondiente a selectUserName

    const [ weatherActual, setWeatherActual ] = useState( null )

    const [ errorFromMyServer, setErrorFromAPI ] = useState( "" )
    
    
    useEffect( () => {

        if( !cityActual ) {
            return
        }
        
            const callToMyServer = async () => {    //arrow async function 
                
                try {
                    //console.log(port)
                    console.log("Desde WeatherConsumer, cityActual:", cityActual)
                    const response = await fetch( `https://myweatherapifromrender.onrender.com/myWeatherExpressAPIFinal?city=${ encodeURIComponent(cityActual) }` )   //http://localhost:${port}/myWeatherAPI

                    console.log(response)

                    if(!response.ok) {
                        throw new Error( 'el servidor fallo')
                    }
                    // else{}  implicito

                    const data = await response.json()

                    console.log( data )

                    setWeatherActual( data )

                    setErrorFromAPI(null)

                }
                
                catch (err) {
                    setErrorFromAPI(err.message)
                    setWeatherActual(null)
                }
            } 
        

        callToMyServer()

    }, [ cityActual ] )


    const weatherIcon = selectWeatherIcon( weatherActual )

    let weatherBackgroundColor = '' ;

        if( weatherActual?.Temperature !== undefined ) {
            weatherBackgroundColor = ( weatherActual.Temperature > 20 )
                ? ( "hotWeather" )
                : ( "coldWeather" ) 
        }

    return(

        <div className= { `weatherContainer ${ weatherBackgroundColor } ` } >
            
            <div className="cityTitleContainer" >
                <h3 className="weatherTitle" > The weather of: </h3>
                <h2 className="weatherLocation" >  { cityActual } </h2>
            </div>
            <h3 className="weatherInfo"  >
                Temperature: { weatherActual?.Temperature} °C { weatherIcon }
            </h3>
            <h3 className="weatherInfo" >
                Humidity: { weatherActual?.Humidity }
            </h3>
            <h4 className="weatherInfo" >
                Hour: { weatherActual?.TimeHour } hs
            </h4>
        </div>
    )

}

export default WeatherConsumer