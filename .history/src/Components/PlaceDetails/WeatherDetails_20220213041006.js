import React from 'react'

function WeatherDetails(weatherData) {
  
      {weatherData.list.map((weather) =>{
      //   console.log(weather.main);
      // })}
        console.log(weatherData)

        return (

            <div>{weatherData}</div>

  )
}

export default WeatherDetails;