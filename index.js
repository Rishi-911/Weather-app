const apiKey = "c03dc47a1c6af43acd26aeb2a3330743";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".place input");
const searchBtn = document.querySelector(".search");
const weatherIcon = document.querySelector(".img-cloud")

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (!response.ok) {
      throw new Error('City not found');
    }

    let data = await response.json();
    console.log(data);

    if (data?.name && data?.main) {
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
      document.querySelector(".para-text").innerHTML = data.main.humidity + "%";
      document.querySelector(".para-text2").innerHTML = data.wind.speed + " km/h";
    } else {
      alert("Data not available. Please try again.");
    }
    
if (data.weather[0].main == "Clouds") {
  weatherIcon.src = "cloudy.png";
} else if (data.weather[0].main == "Clear") {
  weatherIcon.src = "sun.png";
} else if (data.weather[0].main == "Rain") {
  weatherIcon.src = "rainy-day.png";
} else if (data.weather[0].main == "Drizzle") {
  weatherIcon.src = "drizzle.png";
} else if (data.weather[0].main == "Thunderstorm") {
  weatherIcon.src = "thunderstorm.png";
} else if (data.weather[0].main == "Snow") {
  weatherIcon.src = "snow.png";
} else if (data.weather[0].main == "Fog") {
  weatherIcon.src = "fog.png";
} else if (data.weather[0].main == "Mist") {
  weatherIcon.src = "mist.png";
} else if (data.weather[0].main == "Haze") {
  weatherIcon.src = "haze.png";
} else {
  weatherIcon.src = "clear.png"; 
}
  } catch (error) {
    alert(error.message);
  }

}

searchBtn.addEventListener("click", () => {
  const city = searchBox.value.trim();
  if (city) {
    checkWeather(city);
  } else {
    alert("Please enter a city name.");
  }
});
