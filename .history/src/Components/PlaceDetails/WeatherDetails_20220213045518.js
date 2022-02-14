import React from 'react'

function WeatherDetails(weatherData) {
  
    console.log(weatherData);
    console.log(weatherData.weatherData);
    console.log(weatherData.weatherData.main);
  console.log(weatherData.weatherData.main.feels_like);

    // const weather = weatherData.main
    
   
      //{weatherData.list.map)((weather) =>{
      //    console.log(weather);
      //  })}
      //   console.log(weatherData)

        // 
        return (
          <div>
          <li>{weatherData.weatherData.main.feels_like}</li>
          </div>
        )
        
}

export default WeatherDetails;