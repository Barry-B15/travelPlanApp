 import { validateForm } from "./formChecker.js"; // import validateForm from form Checker
 import { countdownDates } from "./tripCountDown";
 import "regenerator-runtime/runtime"; // fix for runtime issues when using async func stackoverflow

 import moment, { duration } from 'moment';

 moment().format();

 const m = moment();
 var currentDate = m.format("dddd MMM Mo YYYY"); // today's date 
 document.getElementById('date').innerHTML = currentDate;

 //=========== 2. set up the parts of the app ==================
 // http://api.geonames.org/searchJSON?q=tokyo,akishima&maxRows=10&username=btorn
 let cityBaseURL = 'http://api.geonames.org/searchJSON?';
 const cityName = document.getElementById('city_name'); //### wio just added .value for weather
 const userName = 'btorn';


 // for weather from weather.io 
 let weatherBaseURL = 'https://api.weatherbit.io/v2.0/forecast/daily?';
 const weatherApi_key = '0f1e6273790442689ecced5ee48ea5c0';



 // pixabay api for pix
 let pixBaseURL = 'https://pixabay.com/api/?';
 const pixApiKEY = '17819756-fbaad3ff5558affc08c739517';
 const imgType = 'photo';


 // Create a new date instance dynamically with JS
 let d = new Date();
 let newDate = d.getMonth() + 1 + '-' + d.getDate() + '-' + d.getFullYear(); //month index starts at 0, add +1 to even up
 //currentDate.textContent = "Posted on: " + newDate;

 //add listener and a callback function to the button
 document.getElementById('generate').addEventListener('click', performAction);

 function performAction(e) {

     e.preventDefault(); //towards form validation


     // get input from user

     const cityName = document.getElementById('city_name').value;
     var start = document.getElementById("startDate").value;
     var end = document.getElementById("returnDate").value;

     // date
     newDate;
     // dates with moment.js
     var currentDate = moment().format("L");
     //var startDate = moment(document.getElementById("startDate").value, "MM-DD-YYYY");
     var startDate = moment(start, "L");
     //var endDate = moment(document.getElementById("returnDate").value, "MM-DD-YYYY");
     var endDate = moment(end, "L");
     var daysToTrip = moment.duration(startDate.diff(currentDate));

     // Form validation
     /* if (start.length == 0) {
         alert("Please enter a departing date!");
         return
     }
     if (end.length == 0) {
         alert("Please enter a returning date!");
         return
     }
     if (cityName.length == 0) {
         alert("Please enter a city name");
         return
     } */
     const tripErrMsg = "Please check your city name and dates then try again";

     // validate form

     if (checkINPUT(startDate, endDate, cityName) == true) {

         console.log("::: Form Submitted :::");

         // error message
         const tripMsg = "Please check your city name and dates then try again";

         /* } else {
             alert(tripErrMsg);
             //return false;
         } */

         // call get getCityImgData
         getCityImgData(pixBaseURL, pixApiKEY, cityName)
             .then(function(imageData) {
                 if (!imageData.hits[0] == 0) {
                     let cityImageData = imageData.hits[0];
                     console.log("::: City Img Data :::", cityImageData);

                     postImgData('addImage', {
                             image_s: cityImageData.previewURL, //for small image
                             image: cityImageData.webformatURL // use a larger img

                         })
                         // display destination image
                         //document.getElementById("image").src = cityImageData.previewURL;
                     document.getElementById("image").src = cityImageData.webformatURL;

                 } else {
                     console.log("No image found for the city");
                     document.getElementById("destination_img").innerHTML = "Sorry, no image for this destination";
                 }
             })

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
                     //document.getElementById('content').innerHTML = cityData.name;
                 document.getElementById('country').innerHTML = cityData.countryName;
                 document.getElementById('city').innerHTML = cityData.name;
                 //document.getElementById('date').innerHTML = newDate;
                 document.getElementById("depart-date").innerHTML = startDate;
                 document.getElementById('lat').innerHTML = cityData.lat;
                 document.getElementById('lon').innerHTML = cityData.lng;
                 //######################################################################### 
                 // call the trip deyails
                 //tripDetails(startDate);
             })

         //get weatherbit.io data ###5.5
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
                 document.getElementById('description').innerHTML = cityWeather.weather.description;
                 document.getElementById('temp-high').innerHTML = cityWeather.high_temp;
                 document.getElementById('temp-low').innerHTML = cityWeather.low_temp;
                 //######################################################################### 
             })

         .catch((error) => {
             console.log("Error:", error);
             // .catch((error) => {
             //     console.log("Error:", cityMsg);
             // });
         });

         //require.end();
         countdownDates(daysToTrip);
         //validateForm(startDate, cityName);
         //updateUI();
         //return true;

     } else {
         alert(tripErrMsg);
         //return false;
     }

 }

 function checkINPUT(input) {

     //let url = document.getElementById('name').value;
     const errorMsg = "Please check your date and city are valid";

     if (validateForm(input)) { //(Client.validateForm(input)) {
         console.log(input);
     } else {
         console.log(errorMsg);
         //document.getElementById('error').innerHTML = 'Please, enter a valid url';
     }
 }

 // handle get destination image
 const getCityImgData = async() => {
     let image_url, city_img;

     city_img = cityName.value;
     image_url = `${pixBaseURL}key=${pixApiKEY}&q=${city_img}&image_type=${imgType}`;

     const res = await fetch(image_url); // await the img respose

     try {
         const img_data = await res.json(); // await res fro json.
         console.log("IMAGE :", img_data);
         return img_data;

     } catch (error) {
         console.log("imgError :", error);
     }

 }

 // Get weather from weather io, use tripdata as asyn param
 const getWeatherData = async() => { //tripData
     let weather_url, city;

     city = cityName.value;
     weather_url = `${weatherBaseURL}city=${city}&key=${weatherApi_key}`;
     //latitude = postData.geonames.latitude;
     //longitude = postData.geonames.longitude;

     //5.3 get lat, lon from tripData
     //  latitude = tripData.latitude;
     //  longitude = tripData.longitude;

     // sending a request thru proxy to avoid CORS Error
     const response = await fetch(weather_url);

     try {
         const weather_data = await response.json();
         console.log("WeatherData : ", weather_data);
         return weather_data;
     } catch (error) {
         console.log("WeatherResponseError :", error);
     }
 }

 const getGeoNames = async() => {
     let city, city_url;

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

 // post image data
 const postImgData = async(url = '', imageData = {}) => {
     console.log("ImageData :", imageData);

     const res = await fetch(url, {
         method: 'POST', // the method we want, can be POST, GET, PUT, DELETE etc
         credentials: 'same-origin',
         headers: {
             'Content-Type': 'application/json', // we use json, tell app to use json data, Make sure to use same type of data in the body
         },
         // Body data type must match "Content-Type" header
         body: JSON.stringify(imageData), // tell browser to handle json as string
     });

     try {
         const newData = await res.json();
         console.log(newData);
         return newData;
     } catch (error) {
         console.log(error);
     }
 }

 /* const postTripData = async(url = '', trip_data = {}) => {
     console.log(trip_data);
     let lat, lon, city_name, city_img;

     try {
         const city_url = `${cityBaseURL}q=${city}&maxRows=10&username=${userName}`;

         const weather_url = `${weatherBaseURL}city=${city}&key=${weatherApi_key}`;

         const image_url = `${pixBaseURL}key=${pixApiKEY}&q=${city_img}&image_type=${imgType}`;

     } catch (error) {

     }
 } */

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
         //document.getElementById('country-code').innerHTML = allData[index].countryCode; // placeholder
         //document.getElementById('city-name').innerHTML = allData[index].name; // placeholder
         //document.getElementById('date').innerHTML = "Date: " + newDate;

     } catch (error) {
         console.log("error", error);
         console.error("Update UIError", error);
     }
 }

 export {
     performAction,
     getWeatherData,
     postWeatherData,
     getGeoNames,
     postData,
 }