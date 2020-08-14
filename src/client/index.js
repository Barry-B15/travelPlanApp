import {
    performAction,
    getCityImgData,
    postImgData,
    getWeatherData,
    postWeatherData,
    getGeoNames,
    postData,
    checkINPUT,
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

//alert("HI! GooD To See YOu HERE!");

export {
    performAction,
    getCityImgData,
    postImgData,
    getWeatherData,
    postWeatherData,
    getGeoNames,
    postData,
    checkINPUT,
}