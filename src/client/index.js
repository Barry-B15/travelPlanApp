import { performAction } from './js/app'; // importing func performAction from js/app
import { init } from "./js/app";

// import scss
import "./styles/style.scss";
import "./styles/testStyle.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/resets.scss";

// Call init on DOMContentLoaded event
window.addEventListener('DOMContentLoaded', init)


export {
    performAction,
    //init
}