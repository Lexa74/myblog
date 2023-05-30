import {useState} from "react";
import {WeekWeather} from "./WeekWeather";
import {Arrow} from "../icons/Arrow";

export const DailyWeatherForecast = ({weatherWeek, startWith}) => {
    const [isLoadMore, setIsLoadMore] = useState(false)

    const handlerMore = () => {
        setIsLoadMore(!isLoadMore)
    }

    return (
        <>
            <div className={`weather-days ${isLoadMore ? 'open' : ''}`}>
                {weatherWeek.weatherDays.map((week, index) => (
                    <div key={index}>
                        {index >= startWith && (
                            <div key={index} className="weather-container">
                                <div className="weather-container__date">
                                    <span>Дата: </span>{week[index].date}
                                </div>
                                <WeekWeather week={week}/>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <p className={'load-more'} onClick={handlerMore}>
                {isLoadMore ? 'Скрыть' : 'Посмотреть погоду на неделю'}
                <Arrow addClass={isLoadMore ? 'active' : ''}/>
            </p>
        </>
    )
}