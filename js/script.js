const API_KEY = `a8842817f544f40f61ba0ddcdd04e303`;
const searchTemperature = () =>{
    const city = document.getElementById('city-name').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
         .then(res => res.json())
         .then(data => displayTemp(data));
}

const updateElement =  (id,text) => {
    document.getElementById(id).innerText = text;
};
const displayTemp = temperature  => {
  console.log(temperature)
  updateElement('city',temperature.name)
  updateElement('temp',temperature.main.temp)
  updateElement('weather',temperature.weather[0].main)
  updateElement('p1',temperature.main.pressure)
  updateElement('p2',temperature.main.humidity)

  


// weather icon settings 
const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
const imgIcon = document.getElementById('image-icon');
imgIcon.setAttribute('src', url);
}