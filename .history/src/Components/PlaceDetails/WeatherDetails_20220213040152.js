import React from 'react'

function WeatherDetails(weatherdata) {
  
      {weatherData.main((weather)=>{
        console.log(weather);
      })}
        
        return (

            <div>{weather}</div>

  )
}

export default WeatherDetails;