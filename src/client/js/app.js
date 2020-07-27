import { validateForm } from "./formChecker.js"; // import validateForm from form Checker
import "regenerator-runtime/runtime"; // fix for runtime issues when using async func stackoverflow

/* Global Variables */

//=========== 2. set up the parts of the app ==================
// http://api.geonames.org/searchJSON?q=tokyo,akishima&maxRows=10&username=btorn
let cityBaseURL = 'http://api.geonames.org/searchJSON?';
const cityName = document.getElementById('city_name');
const userName = 'btorn';
const cityURL = `${cityBaseURL}q=${cityName}&maxRows=10&username=${userName}`;

/* //Personal API Key from OpenWeatherMap API
// create a base url
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?';


// decalare a variable to handle dynamic zip code from user
const zipCode = document.getElementById('zip');
const units = 'metric';

const apiKey = 'Your API KEY HERE';

const url = `${baseURL}zip=${zipCode}&units=${units}&appid=${apiKey}`; // may use url too

// get the DOM elements
const status = document.getElementById('feelings').value;
const currentDate = document.getElementById('date');
 */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '-' + d.getDate() + '-' + d.getFullYear(); //month index starts at 0, add +1 to even up
//currentDate.textContent = "Posted on: " + newDate;

//add listener and a callback function to the button
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
    //getNowWeather(url);

    e.preventDefault(); //towards form validation

    /* const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    const message = "Check Your Zip Code and try Again!";

    // Form validation
    if (zipCode.length == 0) {
        alert("Please enter zip code");
        return
    }
    if (feelings.length == 0) {
        alert("Please enter feelings");
        return
    } */

    const cityMsg = "Please check your city name and try again";
    const cityName = document.getElementById('city_name').value;

    if (cityName.length == 0) {
        alert("Please enter a city name");
    }

    //getWeatherData the projectData
    getGeoNames(cityBaseURL, cityName, userName) //(baseURL, zipCode, apiKey)
        .then(function(projectData) {

            let cityData = projectData.geonames[0];
            console.log("::: City Data :::", cityData);

            console.log("latlon:", cityData.lat, cityData.lng);

            postData('addGeoNames', {
                city: cityData.name,
                country: cityData.countryCode,
                country_name: cityData.countryName,
                latitude: cityData.lat,
                longitude: cityData.lng

                /* temperature: projectData.main.temp,
                date: newDate,
                userFeeling: feelings,

                // weather summary for city, country
                weatherNow: projectData.weather[0].description,
                cityName: projectData.name,
                country: projectData.sys.country */
            })
            updateUI();
            // we can log here to the UI like so
            document.getElementById('content').innerHTML = cityData.name;
        })
        .catch((error) => {
            console.log("Error:", cityMsg);
        });
}

const getGeoNames = async() => {
    let city, city_url, zip, weather_url;

    const errMessage = "City Not Found";

    city = cityName.value;
    //build the url for the city
    city_url = `${cityBaseURL}q=${city}&maxRows=10&username=${userName}`;

    const response = await fetch(city_url);

    /* zip = zipCode.value;
    //build the url
    weather_url = `${baseURL}zip=${zip}&units=${units}&appid=${apiKey}`;
    const response = await fetch(weather_url); */

    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(errMessage);
    }

}

//=========== 1. set up post data async fun ==================
const postData = async(url = '', data = {}) => {
    console.log(data);

    const response = await fetch(url, {
        method: 'POST', // the method we want, can be POST, GET, PUT, DELETE etc
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json', // we use json, tell app to use json data, Make sure to use same type of data in the body
        },
        // Body data type must match "Content-Type" header
        body: JSON.stringify(data), // tell browser to handle json as string
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);

    }
}

// Update The UI
const updateUI = async() => {

    const request = await fetch('/all'); //fetch('http://localhost:8000/all'); //
    console.log('UPDATE UI');

    try {
        const allData = await request.json();
        console.log('allData: ' + allData);

        let index = allData.length - 1;
        // get the last entry in the array and update the ui with it as below

        /*  // update the HTML elements
         document.getElementById('date').innerHTML = "Posted on: " + newDate;
         document.getElementById('temp').innerHTML = "The temperature is: " + allData[index].temp + " &#176;" + "C"; //weather
         document.getElementById('content').innerHTML = `And you're feeling: ` + allData[index].userFeeling;

         //My Additions
         document.getElementById('description').innerHTML = allData[index].description;
         document.getElementById('city').innerHTML = allData[index].name;
         document.getElementById('country').innerHTML = allData[index].country; */

        document.getElementById('lat').innerHTML = allData[index].lat;
        document.getElementById('lon').innerHTML = allData[index].lng;
        document.getElementById('city').innerHTML = allData[index].name;
        document.getElementById('country').innerHTML = allData[index].countryName;
        document.getElementById('country-code').innerHTML = allData[index].countryCode; // placeholder
        document.getElementById('city-name').innerHTML = allData[index].name; // placeholder

    } catch (error) {
        console.log("error", error);
        console.error("Update UIError", error);
    }
}

// initialize the app (this func will hold all the codes). performAction(e) can also be used for this purpose
/* function init(event) {
    event.preventDefault()

    let userText = document.getElementById('zip');
    Client.validateForm(userText)

    console.log("::: Form Submitted :::")
        // fetch('http://localhost:8000') // fetch('http://localhost:8000/test')
        //     .then(res => res.json())
        //     .then(function(res) {
        //         document.getElementById('results').innerHTML = res.message;
        //     })

    //TODO
} // then export the func here and go to import in index.js
 */
export {
    performAction,
    //init 
}

// http://api.geonames.org/search?q=tokio&maxRows=10&fuzzy=0.8&username=btorn  // this works even with typo in a city name

// http://api.geonames.org/searchJSON?q=tokyo,akishima&maxRows=10&username=btorn // adding city and state

// http://api.geonames.org/postalCodeSearchJSON?formatted=true&postalcode=9011&maxRows=10&username=demo&style=full

// http: //api.geonames.org/searchJSON?q=london&maxRows=10&username=demo