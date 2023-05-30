import {useEffect, useState} from "react";
import {getCoordsByCity, getWeather} from "../../services/weatherServices";
import './weatherForecast.scss'
import {Loader} from "../icons/Loader";
import {DailyWeatherForecast} from "./DailyWeatherForecast";
import {WeekWeather} from "./WeekWeather";

export const WeatherForecast = () => {
    const [thisCityWeather, setThisCityWeather] = useState([])
    const [changeCityInput, setChangeCityInput] = useState('Minsk')
    const enumAllowedCites = ['Minsk', 'Moscow', 'Bratislava']
    const startFromNumberParseData = 1;

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            setThisCityWeather(await getWeather(`latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`))
        }, async () => {
            setThisCityWeather(await getWeather(await getCoordsByCity('Moscow')))
        })

    }, [])

    const clickCityButton = async (city) => {
        setThisCityWeather(await getWeather(await getCoordsByCity(city)))
    }

    const handlerCity = async () => {
        setThisCityWeather(await getWeather(await getCoordsByCity(changeCityInput)))
    }

    return (
        <>
            <div className="weather wrapper">
                <h1>Прогноз погоды в городе: {thisCityWeather.weatherCity}</h1>
                <div className="change-city">
                    <div className="change-city__wrapper">
                        <p>Выбирете город:</p>
                        <div className="change-city__buttons">
                            {enumAllowedCites.map((city, index) => (
                                <button className="btn blue" key={index} onClick={() => clickCityButton(city)}>{city}</button>
                            ))}
                        </div>
                    </div>
                    <div className="change-city__wrapper">
                        <p>Или введите название латинскими буквами</p>
                        <div className="change-city__input">
                            <input type="text"
                                   onKeyPress={(e) => e.key === 'Enter' && handlerCity()}
                                   onChange={(e) => setChangeCityInput(e.target.value)}
                                   placeholder={'Введите город'}
                            />
                            <button onClick={handlerCity} className={'btn blue'}>Применить</button>
                        </div>
                    </div>
                </div>
                {thisCityWeather.isLoaded ?
                    (
                        <>
                            <div className="weather-container">
                                <div className={'weather-container__now'}>
                                    <span>Температура сейчас: </span>
                                    {thisCityWeather.weatherNow}
                                </div>
                                <WeekWeather week={thisCityWeather.weatherDays[0]}/>
                            </div>
                            <DailyWeatherForecast startWith={startFromNumberParseData} weatherWeek={thisCityWeather}/>
                        </>
                    ) : <Loader/>
                }
            </div>
        </>
    )
}