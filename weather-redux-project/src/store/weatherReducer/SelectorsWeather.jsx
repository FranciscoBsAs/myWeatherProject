export function SelectUserCity ( state ) {
    return  ( state.theUserInteraction.city ) 
}

export function selectWeatherIcon(weatherActual) {
    if (!weatherActual) return null;

    return (
         weatherActual.Temperature > 20
            ? " ☀️"
            : " ☁️" 
    )
}

export function SelectWindUnit ( state ) {
    return(
        state.theUserInteraction.windUnit
    )
}

export function SelectTemperature ( st ) {
    return(
        st.theUserInteraction.temperatureUnit
    )
}

export function SelectIsLoading ( state ) {
    return(
        state.theUserInteraction.isLoading
    )
}