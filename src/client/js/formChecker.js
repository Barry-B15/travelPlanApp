import moment from 'moment';
moment().format();

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
        alert("You want to travel to Japan!")
    }

    var datePattern = /(0\d{1}|1[0-2])\/([0-2]\d{1}|3[0-1])\/(19|20)(\d{2})/;

    var cityPattern = /^[a-zA-Z\s]+$/;

    let regexDate = new RegExp(datePattern);
    let regexCity = new RegExp(cityPattern);

    /* var startDate = moment(document.getElementById("startDate").value, "MM-DD-YYYY");
    var endDate = moment(document.getElementById("returnDate").value, "MM-DD-YYYY"); // returning date
    var cityName = document.getElementById('city_name').value; */


    console.log("::: Running ValidateInput :::", input);

    // check that the pattern matches
    // if (regexDate.test(startDate) === true || regexDate.test(endDate) === true || regexCity.test(cityName) === true)
    // 
    if (regexDate.test(startDate) //&& regexDate.test(endDate) && regexCity.test(cityName)
    ) {
        return true;
    } else {
        //alert("Make sure all fields are properly completed")
        return false;
    }

    /*
        if (startDate.length == 0) {
            alert("Please enter a departing date!");
            return
        }
        if (endDate.length == 0) {
            alert("Please enter a returning date!");
            return
        }
        if (cityName.length == 0) {
            alert("Please enter a city name");
            return
        } */

}

export { validateForm }