var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function startTimer(){
    const current_time = new Date();
    const current_day = current_time.getDay();
    const current_month = current_time.getMonth();
    const current_date = current_time.getDate();
    const current_year = current_time.getFullYear();

    document.getElementById("month").innerHTML = months[current_month].concat(" ",current_date," ",current_year);
    document.getElementById("timer").innerHTML = current_time.toLocaleTimeString('en-US');
    document.getElementById("day").innerHTML = days[current_day];
}
setInterval(startTimer,1000);



