import "./Widget.scss"
import {getWeatherData} from "../../service/widget";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentCityActionCreator, setWeatherData} from "../../redux/widget";
import {useEffect, useRef} from "react";

export const Widget = () => {
    const inputRef = useRef<any>()
    const dispatch = useDispatch();
    const currentCity = useSelector((state: any) => state.weatherReducer.currentCity)
    const weatherData = useSelector((state: any) => state.weatherReducer.weatherData)

    debugger

    useEffect(() => {
        dispatch(setWeatherData(currentCity))
    }, [currentCity]);

    return (
        <div className={"Widget-wrapper"}>
            <div className={"Widget-top"}>
                <div className={"Widget-top__info"}>
                    <h1>Погодное приложение</h1>
                    Узнайте погоду в вашем городе
                </div>
            </div>
            <div className={"Widget-bottom"}>
                <div className={"Widget-input"}>
                    <input ref={inputRef}
                           onChange={() => dispatch(setCurrentCityActionCreator(inputRef.current.value))}/>
                </div>
                <div className={"Widget-data"}>
                    <div>
                        {weatherData ? <img
                            src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}/> : null}
                        {weatherData ? weatherData.weather[0].description : null}
                    </div>
                    <div>Местоположение: {weatherData ? weatherData.name : null}</div>

                    <div>Скорость ветра: {weatherData ? weatherData.wind.speed : null} м/с</div>
                    <div
                        className={"Widget-temperature"}>Температура: {weatherData ? `${((weatherData?.main?.temp - 273).toFixed(1))}° C` : null}
                    </div>
                    <div>Давление: {weatherData?.main?.pressure}</div>

                </div>
            </div>
        </div>
    )
}