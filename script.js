const apiKey = "bae5a878a2d4c9f034c17cfaf71ddb4f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".searBtn");


async function getCountryName(code) {
    const resp = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    const countryData = await resp.json();
    return countryData[0].name.common;
}

async function checkWeather(city) {
    if (!city) {
        console.error("City is empty");
        return;
    }

    const response = await fetch(`${apiUrl}?q=${city}&units=metric&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    if (data.cod !== 200) {
        document.querySelector(".name").textContent = data.message;
        return;
    }

    const fullCountryName = await getCountryName(data.sys.country);

    document.querySelector(".name").innerHTML = `${data.name}, ${fullCountryName}`;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".stats").innerHTML = data.weather[0].main;
    document.querySelector(".humid").innerHTML = data.main.humidity + "%";
    document.querySelector(".feels-like").innerHTML = data.main.feels_like + "°C";
    document.querySelector(".windspeed").innerHTML = data.wind.speed + "km/h";
}
// keep the listeners:
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value.trim());
});

searchBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // stop form submit
    checkWeather(searchBox.value.trim());
  }
});

