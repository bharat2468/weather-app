var text_box = document.getElementById("city");
var btn = document.getElementById("search");
var image =  document.getElementById("image") 
var temp = document.getElementById("temp")
var area =  document.getElementById("cityname")
var hum = document.getElementById("humidity")
var wind =  document.getElementById("windspeed")


window.onload = function() {
    display_weather();
};

text_box.addEventListener("keypress",
    (e) => {
        if(e.key === "Enter"){
            display_weather();
        }
    }
)

async function display_weather(){
    let city = text_box.value;

    let key = "18aebeb774eb4f80b36134641241103";

    let data = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`);
    let data_json = await data.json();

    image.src = data_json.current.condition.icon;
    temp.innerHTML = `${data_json.current.temp_c}<sup>o</sup>C`;
    area.textContent = data_json.location.name;
    hum.textContent = `${data_json.current.humidity}%`;
    wind.textContent = `${data_json.current.wind_kph}Km/h`


}