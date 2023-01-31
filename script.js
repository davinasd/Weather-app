const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d347cb5738msh1eb0c92815f5697p111818jsnfcba347e582a",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) =>{

cityName.innerHTML=city

fetch(
  'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response)

    //cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
    temp2.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    humidity2.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    wind_speed2.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset
  })
  .catch((err) => console.error(err));
}
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")

//Shangai 
fetch(
    'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=shangai',
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      temp3.innerHTML = response.temp
      humidity3.innerHTML = response.humidity
      wind_speed3.innerHTML = response.wind_speed
  
   
     
    })
//Boston
    fetch(
        'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=boston',
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response)
          temp4.innerHTML = response.temp
          humidity4.innerHTML = response.humidity
          wind_speed4.innerHTML = response.wind_speed
      
       
         
        })

//Kolkata
fetch(
    'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata',
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      temp5.innerHTML = response.temp
      humidity5.innerHTML = response.humidity
      wind_speed5.innerHTML = response.wind_speed
  
   
     
    })    
//Dubai        
    fetch(
        'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=dubai',
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response)
          temp6.innerHTML = response.temp
          humidity6.innerHTML = response.humidity
          wind_speed6.innerHTML = response.wind_speed
      
       
         
        })    

    
  
