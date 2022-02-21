const repeatString = function(string, num) {
    let repeated = '';
    if (num < 0 || typeof num !== "number") return 'ERROR';
    for (let i = 0; i < num; i++) {
        repeated = `${repeated}${string}`;
    }
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
