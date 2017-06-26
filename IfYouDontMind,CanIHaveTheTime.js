function time(hour, min, period) 
{
    if (min >= 30 && period == "AM") {
        console.log("It's almost " + (hour + 1) + " in the morning");
    }
    if (min >= 30 && period == "PM") {
        console.log("It's almost " + (hour + 1) + " in the evening");
    }
    if (min < 30 && period == "AM") {
        console.log("It's just after " + hour + " in the morning");
    }
    if (min < 30 && period == "PM") {
        console.log("It's just after " + hour + " in the evening");
    }
}

time(8, 50, "AM");
time(7, 15, "PM");