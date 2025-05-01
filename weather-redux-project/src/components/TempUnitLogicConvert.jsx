import { useSelector } from "../store/MainStore"

import { SelectTemperature } from "../store/weatherReducer/SelectorsWeather"

// fabricar un Hook personalizado

export function useTempUnitChosenHook() {

    return useSelector( SelectTemperature )

}

export function ConvertTemperature ( t, unit ) {
    
    switch( unit ) {
        
        case "°F":
            return(
                ( ( t*9/5 ) + 32 ).toFixed(2)
            );
        
        case "K":
            return(
                ( t + 273.15 ).toFixed(2)
            );
        
        default:
            return t

    }

}