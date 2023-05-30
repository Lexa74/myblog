export const WeekWeather = ({week}) => {
    return (
        <div className={'weather-container__wrapper'}>
            {week.map((day, key) => (
                <div key={key}>
                    <div className="weather-container__time">
                        {day.time}
                    </div>
                    <div className="weather-container__temperature">
                        {day.temperature}
                    </div>
                </div>
            ))}
        </div>
    )
}