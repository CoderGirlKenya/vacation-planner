import React from 'react'

function WeatherDetails(weatherData) {
  
    console.log(weatherData);

    {weatherData.keymap((weather) => {
      console.log(weatherData.main);
    })}

   
      //{weatherData.list.map)((weather) =>{
      //    console.log(weather);
      //  })}
      //   console.log(weatherData)

        // 
        
}

export default WeatherDetails;