console.log('Welcome to Weather App');

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//028f4f0290360ec66d237c49e8fc7b58

const weatherApi={
    key: "028f4f0290360ec66d237c49e8fc7b58",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}
const searchInputBox=document.getElementById('input-box');

//Anonymous Function event listener on key press
searchInputBox.addEventListener('keypress',(event)=>{

    if(event.keyCode==13){

        // console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);

        document.querySelector('.weather-body').style.display='block';
    }
    

});


//get weather report


function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather=>{
        return weather.json();
    }).then(showWeatherReport);
}


//show weather report
function showWeatherReport(weather){
// console.log(weather);
let city=document.getElementById('city');
city.innerText=`${weather.name}, ${weather.sys.country}`;


let temperature=document.getElementById("temp");
temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

let minMaxTemp=document.getElementById('min-max');

minMaxTemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

let weatherType=document.getElementById('weather');

weatherType.innerText=`${weather.weather[0].main}`;

let date=document.getElementById('date');

let todayDate=new Date();

date.innerText=dateManage(todayDate);

if(weatherType.textContent=='Haze'){
    document.body.style.backgroundImage="url('./haze.jpg')";
}
else if(weatherType.textContent=='Clouds'){
    document.body.style.backgroundImage="url('./cloudy.jpg')";
}

else if(weatherType.textContent=='Clear'){
    document.body.style.backgroundImage="url('./clear.jpg')";
}

else if(weatherType.textContent=='Thunderstorm'){
    document.body.style.backgroundImage="url('./thunderstorm.jpg')";
}

else if(weatherType.textContent=='Drizzle'){
    document.body.style.backgroundImage="url('./drizzle.jpg')";
}

else if(weatherType.textContent=='Rain'){
    document.body.style.backgroundImage="url('./rainy.jpg')";
}

else if(weatherType.textContent=='Snow'){
    document.body.style.backgroundImage="url('./snow.jpg')";
}

else if(weatherType.textContent=='Smoke'){
    document.body.style.backgroundImage="url('./smoke.jpg')";
}
else if(weatherType.textContent=='Mist'){
    document.body.style.backgroundImage="url('./mist.jpg')";
}
else if(weatherType.textContent=='Dust'){
    document.body.style.backgroundImage="url('./dust.jpg')";
}
else if(weatherType.textContent=='Fog'){
    document.body.style.backgroundImage="url('./fog.jpg')";
}

}


//Date manage

function dateManage(dateArg){
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let months=["January","February","March","April","May","June","July","August","September","October","November","December"];

let year=dateArg.getFullYear();
let month=months[dateArg.getMonth()];
let date=dateArg.getDate();
let day=days[dateArg.getDay()];

return `${date} ${month} (${day}), ${year}`;

}


