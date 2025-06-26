import { configureStore } from "@reduxjs/toolkit";
import { Provider as ReduxProvider, useSelector, useDispatch } from "react-redux"
import theUserInteraction from "./weatherReducer/MainWeatherReducer.jsx" 

const theStore = configureStore(
    
    {
        reducer: {
            theUserInteraction
        }
    }

)

function TheProvider ( { children } ) {
    
    return(
        <ReduxProvider store={ theStore }>
            { children }
        </ReduxProvider>
    )
}

export { TheProvider, useSelector, useDispatch }