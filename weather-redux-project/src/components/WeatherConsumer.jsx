import "./WeatherConsumer.css"

import { useDispatch, useSelector } from "../store/MainStore.jsx";

import { SelectUserCity, selectWeatherIcon, SelectIsLoading } from "../store/weatherReducer/SelectorsWeather.jsx";

import { useEffect, useState } from "react";

import { GetWeatherFromRenderServer } from "../assets/fetch/GetWeatherFromRenderServer.js";

import ClipLoader from "react-spinners/ClipLoader"

import WindConsumer from "./WindConsumer.jsx";

import { useTempUnitChosenHook, ConvertTemperature } from "./TempUnitLogicConvert.jsx";

import { setIsLoading } from "../store/weatherReducer/MainWeatherReducer.jsx";


function WeatherConsumer () {

    const cityActual = useSelector( SelectUserCity )    // invoca ese espacio de memoria correspondiente a selectUserName

    const tempUnitAlreadyChosen = useTempUnitChosenHook()

    const theLoadDispatch = useDispatch() ;

    const itIsLoading = useSelector( SelectIsLoading )

        const [ weatherActual, setWeatherActual ] = useState( null )

        const [ errorFromMyServer, setErrorFromAPI ] = useState( "" )
        
        useEffect( () => {

            if( !cityActual ) {
                setWeatherActual(null)
                return
            }

            theLoadDispatch( setIsLoading( true ) )     	// is true to it's has to load
            
            GetWeatherFromRenderServer( cityActual )
                
                .then( ( data ) => {                        // .then, .catch & .finally are methods of the async function GetWeatherFromRenderServer()

                    setWeatherActual( data ) ;
                    setErrorFromAPI(null)
                    console.log("Desde WeatherConsumer, actual city:", cityActual, data)

                } )

                .catch( (err) => {
                    setWeatherActual(null);
                    setErrorFromAPI( err.message )
                } )

                .finally ( () => {
                    theLoadDispatch( setIsLoading(false) )
                } )

        }, [ cityActual, theLoadDispatch ] )


    // Logic to design:

    const weatherIcon = selectWeatherIcon( weatherActual )

    let weatherBackgroundColor = '' ;

        if( weatherActual?.Temperature !== undefined ) {
            weatherBackgroundColor = ( weatherActual.Temperature > 20 )
                ? ( 'hotWeather' )
                : ( 'coldWeather' ) 
        }
    

    return(

        <div className= { `weatherContainer ${ weatherBackgroundColor } ` } >
            
            <div className="cityTitleContainer" >
                <h3 className="weatherTitle" >
                    The weather of:  
                </h3>
                <h2 className="weatherLocation" >
                        { 
                            itIsLoading === true
                                ? <ClipLoader color="skyblue" size={50} loading={ itIsLoading } />
                                : cityActual 
                        }
                </h2>

            </div>
            <h2  >
                <span className="labelField" >Temperature: { }  </span>

                <span className="weatherInfo">
                
                    { weatherActual?.Temperature !== undefined 
                        &&
                    ConvertTemperature( weatherActual.Temperature, tempUnitAlreadyChosen )
                    }

                    { tempUnitAlreadyChosen }

                    { weatherIcon }
                </span>
            </h2>
            <h2>
                <span className="labelField" > Humidity: </span>
                <span className="weatherInfo" >{ weatherActual?.Humidity }% </span>
            </h2>

            <h2 className=" windSpeedContainer ">
                <span className="labelField" > Wind speed: </span>
                <span className="weatherInfo"> { }
                    { weatherActual?.WindSpeed !== undefined &&
                        < WindConsumer windSpeedDefault={ weatherActual.WindSpeed }/>
                    }
                </span>
            </h2>
        </div>
    )

}

export default WeatherConsumer