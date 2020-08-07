 import { validateForm } from "./formChecker.js"; // import validateForm from form Checker
 //import { countDownToTrip } from "tripCountDown";
 import "regenerator-runtime/runtime"; // fix for runtime issues when using async func stackoverflow

 import moment from 'moment';

 moment().format();

 const m = moment();

 //=========== 2. set up the parts of the app ==================
 // http://api.geonames.org/searchJSON?q=tokyo,akishima&maxRows=10&username=btorn
 let cityBaseURL = 'http://api.geonames.org/searchJSON?';
 const cityName = document.getElementById('city_name'); //### wio just added .value for weather
 const userName = 'btorn';
 const cityURL = `${cityBaseURL}q=${cityName}&maxRows=10&username=${userName}`;

 // for weather from weather.io 
 // https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=API_KEY

 let weatherBaseURL = 'https://api.weatherbit.io/v2.0/forecast/daily?';
 const weatherApi_key = '0f1e6273790442689ecced5ee48ea5c0';
 const weatherURL = `${weatherBaseURL}city=${cityName}&key=${weatherApi_key}`;

 // Create a new date instance dynamically with JS
 let d = new Date();
 let newDate = d.getMonth() + 1 + '-' + d.getDate() + '-' + d.getFullYear(); //month index starts at 0, add +1 to even up
 //currentDate.textContent = "Posted on: " + newDate;
 document.getElementById('date').innerHTML = newDate;
 //add listener and a callback function to the button
 document.getElementById('generate').addEventListener('click', performAction);

 function performAction(e) {

     e.preventDefault(); //towards form validation

     /* 
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

     // get user input for dates
     //const startDateInput = document.getElementById("startDate").value; // 
     newDate;

     var currentDate = moment().format("L");
     var startDate = moment(document.getElementById("startDate").value, "MM-DD-YYYY");
     //var endDate = moment(document.getElementById("returnDate").value, "MM-DD-YYYY");
     var daysToTrip = moment.duration(startDate.diff(currentDate));

     if (cityName.length == 0) {
         alert("Please enter a city name");
     }

     //getCityData from the projectData
     getGeoNames(cityBaseURL, cityName, userName) //(baseURL, zipCode,countdownDates apiKey)
         .then(function(projectData) {

             let cityData = projectData.geonames[0];
             console.log("::: City Data :::", cityData);

             console.log("latlon:", cityData.lat, cityData.lng);

             postData('addGeoNames', {
                     city: cityData.name,
                     country: cityData.countryCode,
                     country_name: cityData.countryName,
                     latitude: cityData.lat,
                     longitude: cityData.lng,
                     date: newDate,
                     tripDate: startDate,
                     tripDue: daysToTrip
                 })
                 // updateUI(); // moving this as I added new calls
                 // we can log here to the UI like so
                 //##############################Display to UI###########################################
             document.getElementById('content').innerHTML = cityData.name;
             document.getElementById('country').innerHTML = cityData.countryName;
             document.getElementById('city').innerHTML = cityData.name;
             document.getElementById('date').innerHTML = newDate;
             //document.getElementById("count").innerHTML = daysToTrip;
             document.getElementById("depart-date").innerHTML = startDate;
             document.getElementById('lat').innerHTML = cityData.lat;
             document.getElementById('lon').innerHTML = cityData.lng;
             //######################################################################### 
             // call the trip deyails
             //tripDetails(startDate);
         })
         // .catch((error) => {
         //     console.log("Error:", cityMsg);
         // });

     //get weather data ###5.5
     getWeatherData(weatherBaseURL, city, weatherApi_key) //###(tripData)
         .then(function(weather_data) { //###(projectData) {
             let cityWeather = weather_data.data[0]; //### projectData.data;
             console.log(weather_data);
             console.log("::: City Weather :::", cityWeather);

             postWeatherData('addWeatherData', {
                     weather: cityWeather.weather.description,
                     high: cityWeather.high_temp, //" &#176;" + "C"
                     low: cityWeather.low_temp
                 })
                 //########################Display#################################################
                 //display to ui: for testing only, move to ui later
             document.getElementById('temp').innerHTML = cityWeather.weather.description;
             document.getElementById('description').innerHTML = cityWeather.weather.description;
             document.getElementById('temp-high').innerHTML = cityWeather.high_temp;
             document.getElementById('temp-low').innerHTML = cityWeather.low_temp;
             //######################################################################### 
         })

     .catch((error) => {
         console.log("Error:", cityMsg);
     });

     //require.end();
     countdownDates(daysToTrip);
     //updateUI();
 }

 //5.2 Get weather from weather io, use tripdata as asyn param
 const getWeatherData = async() => { //tripData
     let weather_url, city, latitude, longitude;

     city = cityName.value;
     weather_url = `${weatherBaseURL}city=${city}&key=${weatherApi_key}`;
     //latitude = postData.geonames.latitude;
     //longitude = postData.geonames.longitude;

     //5.3 get lat, lon from tripData
     //  latitude = tripData.latitude;
     //  longitude = tripData.longitude;

     // sending a request thru proxy to avoid CORS Error
     const weatherResponse = await fetch(weather_url); //fetch(`https: //cors-anywhere.herokuapp.com/${weather_url}`);
     //fetch(weather_url); replaced with the above

     try {
         const weather_data = await weatherResponse.json();
         console.log("WeatherData : ", weather_data);
         return weather_data;
     } catch (error) {
         console.log("WeatherResponseError :", error);
     }
 }

 const getGeoNames = async() => {
     let city, city_url, zip, weather_url;

     const errMessage = "City Not Found";

     city = cityName.value;
     //build the url for the city
     city_url = `${cityBaseURL}q=${city}&maxRows=10&username=${userName}`;

     const response = await fetch(city_url);

     try {
         const data = await response.json();
         console.log(data);
         return data;
     } catch (error) {
         console.log(errMessage);
     }

 }

 //=========== 1. set up post data async fun ==================
 const postData = async(url = '', data = {}) => { //post city data
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

 // set up post weather data
 const postWeatherData = async(url = '', weather_data = {}) => {
     console.log(weather_data);
     const response = await fetch(url, { // can I take off this 2nd para?
         method: 'POST',
         credentials: 'same-origin',
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify(weather_data)
     });

     // Do I need this here?
     try {
         const newData = await response.json();
         console.log(newData);
         return newData;
     } catch (error) {
         console.log("error", error);

     }
 }

 // start a countdown
 function countdownDates(days) {
     const m = moment();


     var currentDate = moment().format("L");
     var comingTrip = moment(document.getElementById("startDate").value, "MM/DD/YYYY");
     var endDate = moment(document.getElementById("returnDate").value, "MM-DD-YYYY");

     var dueIn = moment.duration(comingTrip.diff(currentDate)); // var dueIn
     var days = dueIn.asDays();

     document.getElementById('m-date').innerHTML = currentDate;
     document.getElementById('return-date').innerHTML = endDate;
     document.getElementById('result').innerHTML = days + " days";
     document.getElementById('count').innerHTML = days;

     console.log(days + "days");
     console.log(currentDate);
     return dueIn;

 }
 // function to get trip details
 /* function tripDetails(countDown) {
     let currentDate, startInput, departingDate;

     currentDate = d.getMonth() + 1 + '-' + d.getDate() + '-' + d.getFullYear(); //newDate;
     departingDate = document.getElementById("startDate").value; //new Date().getDate();

     const oneDayMilisecs = 1000 * 60 * 60 * 24;
     const daysToGo = departingDate - currentDate;
     const daysLeft = Math.floor(daysToGo / oneDayMilisecs);
     console.log(daysLeft);
     console.log(countDown);
     return daysLeft;

 } */

 // Update The UI
 const updateUI = async() => {

     const request = await fetch('/all'); //fetch('http://localhost:8000/all'); //
     console.log('UPDATE UI');

     try {
         const allData = await request.json();
         console.log('allData: ' + allData);

         let index = allData.length - 1;
         // get the last entry in the array and update the ui with it as below
         document.getElementById('lat').innerHTML = allData[index].lat;
         document.getElementById('lon').innerHTML = allData[index].lng;
         document.getElementById('city').innerHTML = allData[index].name;
         document.getElementById('country').innerHTML = allData[index].countryName;
         document.getElementById('country-code').innerHTML = allData[index].countryCode; // placeholder
         document.getElementById('city-name').innerHTML = allData[index].name; // placeholder
         document.getElementById('date').innerHTML = "Date: " + newDate;

     } catch (error) {
         console.log("error", error);
         console.error("Update UIError", error);
     }
 }

 /* let val = hello(); // val is "Hello"
 alert(val); */

 export {
     performAction,
     getWeatherData,
     postWeatherData,
     getGeoNames,
     postData,
     //hello,
 }