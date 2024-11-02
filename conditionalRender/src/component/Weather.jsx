import React from 'react'

let temp = 21

const Weather = () => {
  
    if(temp < 15){
        return <h1>It's cold outside</h1>
      } else if(temp > 15 && temp <= 25){
        return <h1>The temprature is good outside</h1>
      } else if(temp > 25) {
        return <h1>It's hot outside</h1>
      }

}

export default Weather