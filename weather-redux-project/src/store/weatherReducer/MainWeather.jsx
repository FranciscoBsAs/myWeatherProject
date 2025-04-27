import { createSlice } from "@reduxjs/toolkit"

const initialStateOfWeather = {
    city: null,
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
            }

        }
    
    }
)

export const { setUserCity, clearCityLocker } = useSlice.actions

export default useSlice.reducer