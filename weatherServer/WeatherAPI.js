// npm init -y
// npm install express
// npm install node-fetch@2   || Actual Version with import and without require() // npm install node-fetch
// npm install cors
// npm install dotenv


const expressServer = require( "express" )

const corsToServer = require( "cors" )

const appWeather = expressServer()


const fetchFunction = require( "node-fetch" )

const port = 600

require('dotenv').config()

//module.exports = { port }


appWeather.use( corsToServer(
    {
        origin: "https://myweatherarg.vercel.app/"
    }
) )


//appWeather.use( corsToServer() )

const myApiID = process.env.VITE_WEATHER_API_ID ;


appWeather.get( "/myWeatherAPIFinal",
    async ( req, resp ) => {
        try {

            const t = req.query.city

            const externCallResponse = await fetchFunction( `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(t)},AR&appid=${myApiID}&units=metric&lang=es`) 

            if( !externCallResponse.ok ) {
                throw new Error( `API externa respondió con error: ${ externCallResponse.status } ` )
            }

            const data = await externCallResponse.json()

            const temperature = data.main.temp;
            const humidity = data.main.humidity;

            const WeatherObject = {
                Temperature: temperature,
                Humidity: humidity,
                TimeHour: new Date().getHours() + ":" + new Date().getMinutes().toString().padStart( 2, '0' ),

            }

            resp.status(200).json( WeatherObject )

        }
        
        catch (err) {
                    console.error("ocurrió este error al obtener clima", err.message);
                resp.status(500).json({
                err: "no se obtuvo",
                    message: err.message,
                })
        }
    }

)

 
appWeather.listen( port, () => {
    console.log( `\n API escuchando en http://localhost:${port}/myWeatherAPIFinal` );
} )

