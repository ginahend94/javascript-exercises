const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') return "ERROR";
    let larger = num1 > num2 ? num1 : num2;
    let smaller = num2 < num1? num2 : num1;
    let sum = 0;
    for (let x = smaller; x <= larger; x++) {
        sum += x;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
