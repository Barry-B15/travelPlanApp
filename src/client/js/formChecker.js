import moment from 'moment';
import { performAction, checkINPUT } from './app';
moment().format();

function validateForm(input) {

    console.log("::: Running ValidateTime :::", input);

    //var m = moment();

    const cityName = document.getElementById('city_name').value;

    // validate time (I used moment only for time in app.js)
    var start = document.getElementById("startDate").value;

    var end = document.getElementById("returnDate").value;

    var startDate = moment(start, "MM/DD/YYYY", true); // ## just removed true
    var endDate = moment(end, "MM/DD/YYYY", true); // ## just removed true 

    // validate city (Using regex cos I used moment only for time in app.js)
    var cityPattern = /^[a-zA-Z]+$/;

    if (startDate.isValid() && endDate.isValid() && cityName.match(cityPattern)) {
        //if (cityName.match(cityPattern)) {
        return true;
    } else {
        alert("Please refresh page and enter valid dates and city name!");
        return false;
    }

}

export {
    validateForm,
    performAction,
    checkINPUT,
}