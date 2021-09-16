import "./Widget.scss"
import {getWeatherData} from "../../service/widget";
import {useDispatch} from "react-redux";
import {setWeatherData} from "../../redux/widget";

export const Widget=()=>{
   const dispatch=useDispatch();
   dispatch(setWeatherData("Moscow"))
    return(
    <div className={"Widget-wrapper"}>
        <div className={"Widget-left"}>
            <div className={"Widget-left__info"} >
            <h1>Погодное приложение</h1>
                Узнайте погоду в вашем городе
            </div>
        </div>
        <div className={"Widget-right"}>
            <div className={"Widget-input"}>
                <input/>
                <div>Получить погоду</div>
            </div>
            <div className={"Widget-data"}>
                <div>Местоположение:</div>
                <div>Температура:</div>
                <div>Давление:</div>
                <div>Заход Солнца:</div>

            </div>
        </div>
    </div>
    )
}