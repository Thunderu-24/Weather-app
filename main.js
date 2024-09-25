const searchInput = document.querySelector(".search-input");
const temp = document.getElementById("temperature");
const des = document.getElementById("description");
const apiKey = "e1242f87eb1c4d7d96a40020240708";
const img = document.getElementById("img");
const cityBefore = document.getElementById("cityBefore");
const zero_am_temp = document.getElementById("0amtemp");
const four_am_temp = document.getElementById("4amtemp");
const six_am_temp = document.getElementById("6amtemp");
const nine_am_temp = document.getElementById("9amtemp");
const twelve_pm_temp = document.getElementById("12pmtemp");
const fifteen_pm_temp = document.getElementById("15pmtemp");
const eighteen_pm_temp = document.getElementById("18pmtemp");
const twenty_one_pm_temp = document.getElementById("21pmtemp");
const twenty_three_pm_temp = document.getElementById("23pmtemp");
const images_hour_array = document.getElementsByClassName("list-item-img");
const loc = document.getElementById("loc");


const weatherCodes = {
  clear: [1000],
  clouds: [1003, 1006, 1009],
  mist: [1030, 1135, 1147],
  rain: [
    1063, 1150, 1153, 1168, 1171, 1180, 1198, 1201, 1240, 1243, 1246, 1273,
    1276,1183
  ],
  moderate_heavy_rain: [1186, 1189, 1192, 1243, 1246],
  snow: [
    1066, 1069, 1072, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222,
    1225, 1237, 1249, 1252, 1255, 1258, 1279, 1282,
  ],
  thunder: [1087, 1279, 1282],
  thunder_rain: [1273, 1276],
};


loc.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(t, f);

  function t(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    apiCalling2(lat, long);
  }

  function f(position) {
    if (confirm("please allow location access..")) {
      navigator.geolocation.getCurrentPosition(t, f);
    } else {
      cityBefore.innerText = "Location permission revoked";
      cityBefore.style.color = "red";
    }
  }
});

const apiCalling2 = async (a, b) => {
  // console.log(a,b);
  const url = `https://api.weatherapi.com/v1//forecast.json?key=e1242f87eb1c4d7d96a40020240708&q=${a} ${b}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    const temperature = data.current.temp_c;
    const description = data.current.condition.text;
    const img1 = data.current.condition.icon;
    // console.log(temperature,description);
    temp.innerHTML = `<h4 id="temperature">${temperature}<span>&#176;C</span></h4>`;
    des.innerText = description;
    const currentWeather = Object.keys(weatherCodes).find((icon) =>
      weatherCodes[icon].includes(data.current.condition.code)
    );
    img.src = `icons/${currentWeather}.svg`;
    cityBefore.innerText = data.location.name;
    cityBefore.style.color = "black";
    const hourlyData = {
      "00:00": Math.floor(data.forecast.forecastday[0].hour[0].temp_c),
      "03:00": Math.floor(data.forecast.forecastday[0].hour[3].temp_c),
      "06:00": Math.floor(data.forecast.forecastday[0].hour[6].temp_c),
      "09:00": Math.floor(data.forecast.forecastday[0].hour[9].temp_c),
      "12:00": Math.floor(data.forecast.forecastday[0].hour[12].temp_c),
      "15:00": Math.floor(data.forecast.forecastday[0].hour[15].temp_c),
      "18:00": Math.floor(data.forecast.forecastday[0].hour[18].temp_c),
      "21:00": Math.floor(data.forecast.forecastday[0].hour[21].temp_c),
      "23:00": Math.floor(data.forecast.forecastday[0].hour[23].temp_c),
    };

    zero_am_temp.innerHTML = `${hourlyData["00:00"]}<span>&#176;C`;
    four_am_temp.innerHTML = `${hourlyData["03:00"]}<span>&#176;C`;
    six_am_temp.innerHTML = `${hourlyData["06:00"]}<span>&#176;C`;
    nine_am_temp.innerHTML = `${hourlyData["09:00"]}<span>&#176;C`;
    twelve_pm_temp.innerHTML = `${hourlyData["12:00"]}<span>&#176;C`;
    fifteen_pm_temp.innerHTML = `${hourlyData["15:00"]}<span>&#176;C`;
    eighteen_pm_temp.innerHTML = `${hourlyData["18:00"]}<span>&#176;C`;
    twenty_one_pm_temp.innerHTML = `${hourlyData["21:00"]}<span>&#176;C`;
    twenty_three_pm_temp.innerHTML = `${hourlyData["23:00"]}<span>&#176;C`;

    const weather0 = Object.keys(weatherCodes).find((icon) =>
      weatherCodes[icon].includes(
        data.forecast.forecastday[0].hour[0].condition.code
      )
    );
    images_hour_array[0].src = `icons/${weather0}.svg`;
    const weather1 = Object.keys(weatherCodes).find((icon) =>
      weatherCodes[icon].includes(
        data.forecast.forecastday[0].hour[3].condition.code
      )
    );
    images_hour_array[1].src = `icons/${weather1}.svg`;
    const weather2 = Object.keys(weatherCodes).find((icon) =>
      weatherCodes[icon].includes(
        data.forecast.forecastday[0].hour[6].condition.code
      )
    );
    images_hour_array[2].src = `icons/${weather2}.svg`;
    const weather3 = Object.keys(weatherCodes).find((icon) =>
      weatherCodes[icon].includes(
        data.forecast.forecastday[0].hour[9].condition.code
      )
    );
    images_hour_array[3].src = `icons/${weather3}.svg`;
    const weather4 = Object.keys(weatherCodes).find((icon) =>
      weatherCodes[icon].includes(
        data.forecast.forecastday[0].hour[12].condition.code
      )
    );
    images_hour_array[4].src = `icons/${weather4}.svg`;
    const weather5 = Object.keys(weatherCodes).find((icon) =>
      weatherCodes[icon].includes(
        data.forecast.forecastday[0].hour[15].condition.code
      )
    );
    images_hour_array[5].src = `icons/${weather5}.svg`;
    const weather6 = Object.keys(weatherCodes).find((icon) =>
      weatherCodes[icon].includes(
        data.forecast.forecastday[0].hour[18].condition.code
      )
    );
    images_hour_array[6].src = `icons/${weather6}.svg`;
    const weather7 = Object.keys(weatherCodes).find((icon) =>
      weatherCodes[icon].includes(
        data.forecast.forecastday[0].hour[21].condition.code
      )
    );
    images_hour_array[7].src = `icons/${weather7}.svg`;
    const weather8 = Object.keys(weatherCodes).find((icon) =>
      weatherCodes[icon].includes(
        data.forecast.forecastday[0].hour[23].condition.code
      )
    );
    images_hour_array[8].src = `icons/${weather8}.svg`;
  } catch (error) {
    console.log(error);
  } finally {
     
  }
};

const imgData = {
  "Partly cloudy": "./icons/cloud.svg",
};

const apiCalling = async (cityname) => {
  const url = `http://api.weatherapi.com/v1//forecast.json?key=${apiKey}&q=${cityname}&days=2`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    const temperature = data.current.temp_c;
    const description = data.current.condition.text;
    const img1 = data.current.condition.icon;
    // console.log(temperature,description);
    temp.innerHTML = `<h4 id="temperature">${temperature}<span>&#176;C</span></h4>`;
    des.innerText = description;
    const currentWeather = Object.keys(weatherCodes).find((icon) =>
      weatherCodes[icon].includes(data.current.condition.code)
    );
    img.src = `icons/${currentWeather}.svg`;
    cityBefore.innerText = data.location.name;
    cityBefore.style.color = "black";
    const hourlyData = {
      "00:00": Math.floor(data.forecast.forecastday[0].hour[0].temp_c),
      "03:00": Math.floor(data.forecast.forecastday[0].hour[3].temp_c),
      "06:00": Math.floor(data.forecast.forecastday[0].hour[6].temp_c),
      "09:00": Math.floor(data.forecast.forecastday[0].hour[9].temp_c),
      "12:00": Math.floor(data.forecast.forecastday[0].hour[12].temp_c),
      "15:00": Math.floor(data.forecast.forecastday[0].hour[15].temp_c),
      "18:00": Math.floor(data.forecast.forecastday[0].hour[18].temp_c),
      "21:00": Math.floor(data.forecast.forecastday[0].hour[21].temp_c),
      "23:00": Math.floor(data.forecast.forecastday[0].hour[23].temp_c),
    };

    zero_am_temp.innerHTML = `${hourlyData["00:00"]}<span>&#176;C`;
    four_am_temp.innerHTML = `${hourlyData["03:00"]}<span>&#176;C`;
    six_am_temp.innerHTML = `${hourlyData["06:00"]}<span>&#176;C`;
    nine_am_temp.innerHTML = `${hourlyData["09:00"]}<span>&#176;C`;
    twelve_pm_temp.innerHTML = `${hourlyData["12:00"]}<span>&#176;C`;
    fifteen_pm_temp.innerHTML = `${hourlyData["15:00"]}<span>&#176;C`;
    eighteen_pm_temp.innerHTML = `${hourlyData["18:00"]}<span>&#176;C`;
    twenty_one_pm_temp.innerHTML = `${hourlyData["21:00"]}<span>&#176;C`;
    twenty_three_pm_temp.innerHTML = `${hourlyData["23:00"]}<span>&#176;C`;

    const weather0 = Object.keys(weatherCodes).find((icon) =>
      weatherCodes[icon].includes(
        data.forecast.forecastday[0].hour[0].condition.code
      )
    );
    images_hour_array[0].src = `icons/${weather0}.svg`;
    const weather1 = Object.keys(weatherCodes).find((icon) =>
      weatherCodes[icon].includes(
        data.forecast.forecastday[0].hour[3].condition.code
      )
    );
    images_hour_array[1].src = `icons/${weather1}.svg`;
    const weather2 = Object.keys(weatherCodes).find((icon) =>
      weatherCodes[icon].includes(
        data.forecast.forecastday[0].hour[6].condition.code
      )
    );
    images_hour_array[2].src = `icons/${weather2}.svg`;
    const weather3 = Object.keys(weatherCodes).find((icon) =>
      weatherCodes[icon].includes(
        data.forecast.forecastday[0].hour[9].condition.code
      )
    );
    images_hour_array[3].src = `icons/${weather3}.svg`;
    const weather4 = Object.keys(weatherCodes).find((icon) =>
      weatherCodes[icon].includes(
        data.forecast.forecastday[0].hour[12].condition.code
      )
    );
    images_hour_array[4].src = `icons/${weather4}.svg`;
    const weather5 = Object.keys(weatherCodes).find((icon) =>
      weatherCodes[icon].includes(
        data.forecast.forecastday[0].hour[15].condition.code
      )
    );
    images_hour_array[5].src = `icons/${weather5}.svg`;
    const weather6 = Object.keys(weatherCodes).find((icon) =>
      weatherCodes[icon].includes(
        data.forecast.forecastday[0].hour[18].condition.code
      )
    );
    images_hour_array[6].src = `icons/${weather6}.svg`;
    const weather7 = Object.keys(weatherCodes).find((icon) =>
      weatherCodes[icon].includes(
        data.forecast.forecastday[0].hour[21].condition.code
      )
    );
    images_hour_array[7].src = `icons/${weather7}.svg`;
    const weather8 = Object.keys(weatherCodes).find((icon) =>
      weatherCodes[icon].includes(
        data.forecast.forecastday[0].hour[23].condition.code
      )
    );
    images_hour_array[8].src = `icons/${weather8}.svg`;
  } catch (error) {
    console.log(error);
    cityBefore.innerText = "Enter Valid City Name";
    cityBefore.style.color = "red";
  } finally {
    
  }
};

const form = document.getElementById("form")
const input = document.getElementById("search-input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityname = input.value;
  apiCalling(cityname);
  input.value="";
});
