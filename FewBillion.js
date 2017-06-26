function fewBillion() {
    var sum = 0.01;
    for (var i=1; i<30; i++) {
        sum *= 2;
    }
    return sum;
}

console.log(fewBillion());