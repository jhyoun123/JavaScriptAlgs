function randomChance(quarters) {
    var quartersLeft = quarters;
    for (var i=0; i<quarters; i++) {
        var rand = Math.trunc(Math.random() * 100);
        if (rand == 0) {
            quartersLeft += Math.floor(Math.random() * 51) + 50;
            return quartersLeft;
        }
        quartersLeft--;
    }
    return quartersLeft;
}

console.log(randomChance(50));
console.log(randomChance(100));
console.log(randomChance(200));