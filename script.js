const API_KEY = "YOUR_API_KEY";

const searchBtn =
document.getElementById("searchBtn");

const cityInput =
document.getElementById("cityInput"); 

const loader =
document.getElementById("loader");

const weatherCard =
document.getElementById("weatherCard");

searchBtn.addEventListener(
"click",
getWeather
);

async function getWeather(){

const city =
cityInput.value.trim();

if(city==="") return;

loader.style.display="block";
weatherCard.style.display="none";

try{

const response =
await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
);

const data =
await response.json();

if(data.cod != 200){

alert("City Not Found");
loader.style.display="none";
return;
}

document.getElementById("city")
.innerText =
data.name;

document.getElementById("temp")
.innerText =
Math.round(data.main.temp)+"°C";

document.getElementById("description")
.innerText =
data.weather[0].description;

document.getElementById("humidity")
.innerText =
data.main.humidity+"%";

document.getElementById("wind")
.innerText =
data.wind.speed+" km/h";

document.getElementById("weatherIcon")
.src =
`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

weatherCard.style.display =
"block";

changeBackground(
data.weather[0].main
);

}
catch(error){

alert(
"Error Fetching Weather"
);

}
finally{

loader.style.display="none";

}

}

function changeBackground(weather){

const body =
document.body;

switch(weather){

case "Clear":

body.style.background =
"linear-gradient(135deg,#f59e0b,#f97316)";
break;

case "Clouds":

body.style.background =
"linear-gradient(135deg,#64748b,#94a3b8)";
break;

case "Rain":

body.style.background =
"linear-gradient(135deg,#0f172a,#334155)";
break;

case "Thunderstorm":

body.style.background =
"linear-gradient(135deg,#111827,#1e293b)";
break;

default:

body.style.background =
"linear-gradient(135deg,#0f172a,#1e293b,#2563eb)";
}

}
