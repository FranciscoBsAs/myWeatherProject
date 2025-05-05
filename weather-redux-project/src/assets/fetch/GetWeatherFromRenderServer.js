export async function GetWeatherFromRenderServer ( someCity ) {
    
    try {

        const callResponse = await fetch( `https://myweatherapifromrender.onrender.com/myWeatherExpressAPIFinal?city=${ encodeURIComponent( someCity ) }` )

        if( !callResponse.ok ) {
            throw new Error("El servidor respondió con error");
        }

        const data = await callResponse.json();


        return(
            data
        )

    }
    catch (err) {
        console.error("Error al obtener el clima:", err.message);
        throw err;
    }
}