const apiKey ="a357bb14e373b97d177a989d139f7204"
const apiURL ="https://api.openweathermap.org/data/2.5/weather?units=metric"

const searchBar=document.getElementById("searchBar")
const searchBtn=document.getElementById("searchButton")
const weatherPic=document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch( apiURL +`&q=${city}` + `&appid=${apiKey}`)
    let data = await response.json()

    if (response.status == 404){
        alert ("invalid city name")
    }

    console.log(data)

    document.querySelector(".temperature").innerHTML= Math.round(data.main.temp) + "°C"
    document.querySelector(".city").innerHTML= data.name
    document.querySelector(".humidity__value").innerHTML= Math.round(data.main.humidity) + "%"
    document.querySelector(".wind__value").innerHTML= Math.round(data.wind.speed) + "km/h"

    if (data.weather[0].main == 'Clear') {
        weatherPic.src="./assets/img/clear.png"
    }else if (data.weather[0].main == 'Clouds') {
        weatherPic.src="./assets/img/clouds.png"
    }else if (data.weather[0].main == 'Drizzle') {
        weatherPic.src="./assets/img/drizzle.png"
    }else if (data.weather[0].main == 'Mist') {
        weatherPic.src="./assets/img/mist.png"
    }else if (data.weather[0].main == 'Rain') {
        weatherPic.src="./assets/img/rain.png"
    }else {
        weatherPic.src="./assets/img/snow.png"
    }

    document.querySelector(".weather").style.display="block"
    document.querySelector(".details").style.display="block"
}

searchBar.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault() //prevent submitting and reloading the page 
      searchBtn.click()
    }
})

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBar.value)
})
