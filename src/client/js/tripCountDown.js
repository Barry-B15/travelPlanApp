import moment from 'moment';
moment().format();

function sum(a, b) {
    return a + b;
}

function countdownDates(days) {

    var currentDate = moment().format("L"); // today's date

    var startDate = moment(document.getElementById("startDate").value, "MM-DD-YYYY"); // trip departure
    var endDate = moment(document.getElementById("returnDate").value, "MM-DD-YYYY"); // returning date

    var dueIn = moment.duration(startDate.diff(currentDate)); // diff btw departure and return dates
    var days = dueIn.asDays(); // convert to days

    // update ui
    //document.getElementById('date').innerHTML = currentDate;
    document.getElementById('return-date').innerHTML = endDate;
    document.getElementById('count').innerHTML = days;

    console.log(days + "days");
    console.log(currentDate);
    return dueIn;

}

export { countdownDates, sum }

/* function countDownToTrip() {

    let currentDate = new Date(); // today
    let startDate = new Date().getDate(); // trip start date
    //let endDate = new Date().getTime(); // end day
    const daysInterval = setInterval(function() {

        const countDown = startDate - currentDate;
        const oneDayMilisecs = 1000 * 60 * 60 * 24;
        const daysLeft = Math.floor(countDown / oneDayMilisecs);

        // display the result in the element with id: daysTo
        document.getElementById('count').innerHTML = daysLeft + "days to go!";

        // if the count is finished
        if (countDown < 0) {
            clearInterval(daysInterval);
            document.getElementById('daysTo').innerHTML = "EXPIRED";
        }
    }, 1000);
}

export { countDownToTrip }
 */
/**
 * 
 * Introduce a countdown.You’ ll need to add a text field to your project to get the date.
 What type of input should it be ? What about cross browser rendering ?
     We’ re looking to see how soon the trip is, how can you get the information from the DOM and see how soon that date is ?
     Where should you be storing that data once you have it ?
 */