import {getWeatherData} from "../service/widget";

const SET_WEATHER_DATA = "SET_WEATHER_DATA"
const SET_CURRENT_CITY = "SET_CURRENT_CITY"


const initialState: any = {
    weatherData: null,
    currentCity: null
};


export const weatherReducer = (state = initialState, action: any) => {
    debugger
    switch (action.type) {
        case SET_WEATHER_DATA :
            return {
                ...state,
                weatherData: action.weatherData,
            };
        case SET_CURRENT_CITY :
            return {
                ...state,
                currentCity: action.currentCity
            }


        default:
            return state;
    }
};

const setWeatherDataActionCreator = (weatherData: any) => ({
    type: SET_WEATHER_DATA,
    weatherData
})

export const setWeatherData = (cityName: string) => async (dispatch: any) => {
    const data = await getWeatherData(cityName);
    dispatch(setWeatherDataActionCreator(data))
};
export const setCurrentCityActionCreator = (currentCity: string) => ({
    type: SET_CURRENT_CITY,
    currentCity
})