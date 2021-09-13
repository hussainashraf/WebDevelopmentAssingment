 
const form = document.querySelector('form');

  const apiKey = "c20592a1916f41942266d4c0ca3e82ae";
// const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={apikey}`




// get weather report

async function getweathereport(searchInput,apikey){
    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=metric`)
    const data = await url.json();
     console.log(data);
    let city = document.getElementById('city')
    city.innerText = `${data.name},${data.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(data.main.temp)}&deg;C`;

    let minMax = document.getElementById('min-max');
    minMax.innerHTML = `${Math.floor(data.main.temp_min)}&deg;C (min)/${Math.ceil(data.main.temp_max)}&deg;C(max)`

    let weatherType = document.getElementById('weather')
    weatherType.innerText  = `${data.weather[0].main}`;

    let windspeed  = document.getElementById('wind')
    windspeed.innerHTML = `${Math.round(data.wind.speed)} kms`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('clear.jpg')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('cloud.jpg')";
        
    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('haze.jpg')";
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('rain.jpg')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('snow.jpg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('thunder.jpg')";
        
    } 
    else if(weatherType.textContent == 'Mist') {
    
        document.body.style.backgroundImage = "url('mist.jpg')";
        
    } 
}






// Function call

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const searchText = form.elements[0].value;
    getweathereport(searchText);
    form.elements[0].value="";
    document.querySelector('.weather-body').style.display="block";
   
})
    

function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}
          





 