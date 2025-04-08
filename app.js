const apiKey = "72cbbf8ecdfd5450738b567a6b84608f";
const input = document.querySelector("input");
const searchBtn = document.querySelector("button");
const city = document.querySelector("h1");
const temp = document.querySelector("#temp");
const cond = document.querySelector("#cond");
const wind = document.querySelector("#wind");
const hum = document.querySelector("#hum");
const press=document.querySelector("#press")

searchBtn.addEventListener("click", async () => {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${input.value}&appid=${apiKey}`;
    const allData = await axios.get(url);
    const data = allData.data;

    city.innerText = data.name;
    temp.innerText = `${Math.floor(data.main.temp)}°C`;
    hum.innerText = `humidity:${data.main.humidity}%`;
    wind.innerText = `wind:  ${data.wind.speed} km/hr`;
    press.innerText=`pressure:${data.main.pressure} mbar`
    
    
    input.value = "";
  } catch (error) {
    alert("Invalid input ya city not found!");
    console.log(error);
  }
});
