import { useDispatch } from "../store/MainStore.jsx";

import { clearCityLocker } from "../store/weatherReducer/MainWeather";

import "./Consumer1.css"

function ClearCityLockerButton () {

    const cleanDispatch = useDispatch();


    function handleClearLocker () {
        
        cleanDispatch(  clearCityLocker()  )

    }
    

    return(
        <button onClick={ handleClearLocker } className="clearButton" >
            Clear Locker
        </button>
    )
}

export default ClearCityLockerButton