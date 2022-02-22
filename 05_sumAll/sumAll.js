const sumAll = function(num1, num2) {
    let larger = num1 > num2 ? num1 : num2;
    let smaller = num2 < num1? num2 : num1;
    let sum = 0;
    for (let x = smaller; x >= larger; x++) {
        sum += x;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
