function birthday(days) {
    while (days >= 0) {
        if (days >= 30) {
            console.log(days + "days until my birthday. Such a long time... :(");
        }
        else if (days >= 5 && days < 30) {
            console.log(days + "days until my birthday. So close!");
        }
        else if (days > 0 && days < 5) {
            console.log(days + "DAYS UNTIL MY BIRTHDAY!!!");
        }
        else {
            console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
            console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
            console.log("*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
        }
        days--;
    }
}
birthday(60);