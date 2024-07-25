const apiKey ="a357bb14e373b97d177a989d139f7204"
const apiURL ="https://api.openweathermap.org/data/2.5/weather?units=metric"

const searchBar=document.getElementById("searchBar")
const searchBtn=document.getElementById("searchButton")

async function checkWeather(city){
    const response = await fetch( apiURL +`&q=${city}` + `&appid=${apiKey}`)
    let data = await response.json()

    console.log(data)

    document.querySelector(".temperature").innerHTML= Math.round(data.main.temp) + "°C"
    document.querySelector(".city").innerHTML= data.name
    document.querySelector(".humidity__value").innerHTML= Math.round(data.main.humidity) + "%"
    document.querySelector(".wind__value").innerHTML= Math.round(data.wind.speed) + "km/h"
}
checkWeather("monastir")

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBar.value)
})
