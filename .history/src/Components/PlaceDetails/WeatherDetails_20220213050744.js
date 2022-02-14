import React from 'react'

function WeatherDetails(weatherData) {
  
    console.log(weatherData);
    console.log(weatherData.weatherData);
    console.log(weatherData.weatherData.main);
  // console.log(weatherData.weatherData.main.feels_like);

     const temp = weatherData.weatherData.main.temp;
     const feelsLike = weatherData.weatherData.main.feels_like;

    
   
      //{weatherData.list.map)((weather) =>{
      //    console.log(weather);
      //  })}
      //   console.log(weatherData)

        // 
        return (
          <div>
            <li>{temp}</li>
            <li>{feelsLike}</li>
          </div>
        )
        
}

export default WeatherDetails;