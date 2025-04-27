export function SelectUserCity ( state ) {
    return  ( state.theUserInteraction.city ) 
}

export function selectWeatherIcon(weatherActual) {
    if (!weatherActual) return null;

    return (
         weatherActual.Temperature > 20
            ? "☀️"
            : "☁️" 
    )
}