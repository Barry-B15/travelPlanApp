import { performAction, init } from './js/app'; // importing func performAction from js/app
//import { init } from "./js/app";
import { validateForm } from "./js/formChecker";

// import scss
import "./styles/style.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/resets.scss";

console.log(validateForm)

alert("I EXIST!");
alert("I AM HERE!");
//alert("I Exist 2");


// Call init on DOMContentLoaded event
//window.addEventListener('DOMContentLoaded', init)


export {
    performAction,
    validateForm,
    //init,
}