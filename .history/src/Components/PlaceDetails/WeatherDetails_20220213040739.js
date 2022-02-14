import React from 'react'

function WeatherDetails(weatherData) {
  
      {weatherData.main.map((weather)=>{
        console.log(weather);
      })}
        
        return (

            <div>{weatherData}</div>

  )
}

export default WeatherDetails;