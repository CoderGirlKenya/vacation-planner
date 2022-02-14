import React from 'react'

function WeatherDetails(weatherData) {
  
      {weatherData.main.a((weather)=>{
        console.log(weather);
      })}
        
        return (

            <div>{weather}</div>

  )
}

export default WeatherDetails;