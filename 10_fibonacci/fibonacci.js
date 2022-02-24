const fibonacci = function(place) {
    if (place < 0) return "OOPS";
    // Start with 0 and 1
    let old = 0;
    let current = 1;
    let fib = 0;
    for (let i = 0; i < place; i++) {
    // Add together
        fib = old + current;
    // Make 1 old num, sum new num
        old = current;
        current = fib;
    }
    // Repeat
    return old;
};

// Do not edit below this line
module.exports = fibonacci;
