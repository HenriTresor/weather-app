

  const apikey = "68283253bbd1e63bda60baa18dcf3d60";

let srchBtn = document.querySelector("button");



const getTime = () => { 
  let h1 = document.querySelector("h1");
  let h3 = document.querySelector('h3');
  let date = new Date();
  h1.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
 
   h3.innerHTML = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`

}

setInterval(getTime,1000)

srchBtn.addEventListener('click', async () => {
  let city = document.querySelector("input");
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city.value}&id=524901&appid=${apikey}`
  );

  const data = await response.json();

  let h2 = document.querySelector("h2");
  h2.innerHTML = `${data.city.name}`;

  let celcius =  data.list[0].main.temp-273;

  let temp = document.querySelector("#temp");
  temp.innerHTML = `Temperature:&nbsp;&nbsp;&nbsp;${celcius}°C`;
  let hum = document.querySelector("#hum");
  hum.innerHTML = `Hummidity:&nbsp;&nbsp;&nbsp;${data.list[0].main.humidity}%`;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind speed:&nbsp;&nbsp;&nbsp;${data.list[3].wind.speed}km/h`;
  city.value = "";
})
