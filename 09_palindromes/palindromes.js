const palindromes = function (string) {
    const regex = /[\W+_]/g;
    const forwards = string.toLowerCase().replace(regex, '');
    const backwards = forwards.split('').reverse().join('');
    return forwards == backwards;
};

// Do not edit below this line
module.exports = palindromes;
