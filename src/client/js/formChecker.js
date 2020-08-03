//import { hello } from "./module.js";

function validateForm(input) {

    console.log("::: Running ValidateForm :::", input);

    let names = [
        "Tokyo",
        "Okinawa",
        "Osaka",
        "Yokohama",
        "Kyoto"
    ]

    if (names.includes(input)) {
        alert("You are in Japan!")
    }

}

export { validateForm }