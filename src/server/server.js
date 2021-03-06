// Setup empty JS object to act as endpoint for all routes
projectData = [];

var path = require('path')

// Require Express to run server and routes
const express = require('express');

//const mockAPIResponse = require('./mockAPI.js')

// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
//Configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// declare the port for the server to run on
const port = process.env.PORT || 8080;

// Spin up the server
app.listen(port, () => {
    console.log(`Server up and running on localhost: ${port}`);
});

// Initialize the main project folder
//app.use(express.static('website')); // change to use 'distn
app.use(express.static('dist'));
//app.use(express.static('build'));


console.log(__dirname)

app.get('/', function(req, res) {
    //res.sendFile('/client/views/index.html') 

    res.sendFile('dist/index.html'); // now use the one in the dist file instead
    //res.sendFile('build/index.html')
})


//Server Setup

//POST route:  for data from client movie: Fridays
app.post('/add', (request, response) => {
    let data = request.body;
    console.log(data);
})


//route to post all projectData for user location // go set up a func to send weather on the client side

// initialize for all weather data
app.get('/all', (req, res) => {
    res.send(projectData);
    //console.log(projectData);

})

app.post('/addGeoNames', addGeoNames);

function addGeoNames(req, res) {
    newEntry = {
        name: req.body.city,
        countryCode: req.body.country,
        lng: req.body.longitude,
        lat: req.body.latitude,
        countryName: req.body.country_name,
        date: req.body.date,
        startDate: req.body.tripDate,
        daysToTrip: req.body.tripDue
    }

    projectData.push(newEntry)
    res.send(projectData)
    console.log('POST')
        //console.log(projectData)
}

app.post('/addWeatherData', addWeatherData);

function addWeatherData(req, res) {
    newEntry = {
        weather: req.body.weather,
        high_temp: req.body.high,
        low_temp: req.body.low
    }
}

app.post('/addImage', addImage);

function addImage(req, res) {
    newEntry = {
        previewURL: req.body.image_s, // for small img
        webformatURL: req.body.image // use a larger img
    }
}
// if page/route does not exist
app.get("*", (req, res) => {
    res.send("Page not found.")
});