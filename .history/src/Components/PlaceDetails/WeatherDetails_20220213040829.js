import React from 'react'

function WeatherDetails(weatherData) {
  
      {props.weatherData.map((weather)=>{
        console.log(weather.main);
      })}
        
        return (

            <div>{weatherData}</div>

  )
}

export default WeatherDetails;