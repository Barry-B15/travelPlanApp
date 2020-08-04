import {
    performAction,
    getWeatherData,
    postWeatherData,
    getGeoNames,
    postData
} from './js/app'; // importing func performAction from js/app

import { validateForm } from "./js/formChecker";

// import scss
import "./styles/style.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/resets.scss";


console.log(validateForm);
console.log("::: Running ValidateForm in indexjs :::");
validateForm();

alert("I EXIST!");
alert("I AM HERE!");

export {
    performAction,
    validateForm,
    getWeatherData,
    postWeatherData,
    getGeoNames,
    postData,
}