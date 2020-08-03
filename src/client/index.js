import {
    performAction,
    getWeatherData,
    postWeatherData,
    getGeoNames,
    postData
} from './js/app'; // importing func performAction from js/app

import { validateForm } from "./js/formChecker";

//import { hello } from "./js/module.js";

//var performAction = require('./app.js');
//console.log(performAction);

// import scss
import "./styles/style.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/resets.scss";

validateForm();
console.log(validateForm)

alert("I EXIST!");
alert("I AM HERE!");

// let val = hello(); // val is "Hello"
// alert(val);

export {
    performAction,
    validateForm,
    getWeatherData,
    postWeatherData,
    getGeoNames,
    postData,
    //hello,
}