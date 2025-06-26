import { createSlice } from "@reduxjs/toolkit"

const initialStateOfWeather = {
    city: null,
    windUnit: 'm/s',
    temperatureUnit: '°C',
    isLoading: false,
}

const useSlice = createSlice(
    {
        name:'theUserInteraction',

        initialState: initialStateOfWeather,

        reducers: {

            setUserCity: ( state, operation ) => {

                state.city = operation.payload

            },

            clearCityLocker: ( state ) => {
                state.city = null
            },

            setWindUnit: ( state, operation ) => {
                state.windUnit = operation.payload
            },

            setTemperatureUnitReducer: ( state, operation ) => {
                state.temperatureUnit = operation.payload
            },

            setIsLoading: ( state, operation ) => {
                state.isLoading = operation.payload
            }
            
        }
    
    }
)

export const { setUserCity, clearCityLocker, setWindUnit, setTemperatureUnitReducer, setIsLoading } = useSlice.actions

export default useSlice.reducer