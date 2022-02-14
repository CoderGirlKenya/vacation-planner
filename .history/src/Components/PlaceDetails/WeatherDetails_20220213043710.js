import React from 'react'

function WeatherDetails(props) {
  
    console.log(weatherData);
    


    // const weather = weatherData.main
    
   
      //{weatherData.list.map)((weather) =>{
      //    console.log(weather);
      //  })}
      //   console.log(weatherData)

        // 
        return (
          <div>
          {props.weatherData.map((weather =>(
          <div>WeatherDetails</div>
          ))}
          </div>
        )
        
}

export default WeatherDetails;