import moment from 'moment';
import { performAction, checkINPUT } from './app';
moment().format();

function validateForm(input) {

    console.log("::: Running ValidateTime :::", input);

    var m = moment();

    const cityName = document.getElementById('city_name').value;

    // validate time (I used moment only for time in app.js)
    var start = document.getElementById("startDate").value; //m.format(document.getElementById("startDate").value, "MM/DD/YYYY", true); //

    var end = document.getElementById("returnDate").value; //m.format(document.getElementById("returnDate").value, "MM/DD/YYYY", true); //

    var startDate = moment(start, "MM/DD/YYYY", true);
    var endDate = moment(end, "MM/DD/YYYY", true);


    startDate.isValid();
    endDate.isValid();


    /* try this
    var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (!(date_regex.test(testDate))) {
        return false;
    } */

    //var datePattern = /(0\d{1}|1[0-2])\/([0-2]\d{1}|3[0-1])\/(19|20)(\d{2})/;

    console.log("::: Running ValidateCity :::", input);
    // validate city (Using regex cos I used moment only for time in app.js)
    var cityPattern = /[a-zA-Z\s]+/;

    /* if (cityName.match(cityPattern)) {
        return true;
    } else {
        return false;
    } */

    //let regexDate = new RegExp(datePattern);
    let regex = new RegExp(cityPattern);

    //match the string to the pattern
    cityName.match(cityPattern);

    // test that city is entered
    if (regex.test(input)) {
        return true;
    } else {
        console.log("City not valid!");
        return false;
    }

}

export {
    validateForm,
    performAction,
    checkINPUT,
}