const removeFromArray = function(array, ...items) {
    // For each item, filter array for item
    let filteredArray = array;
    items.forEach(item => {
        filteredArray = filteredArray.filter(a => {
            return item !== a;
        });
    });
    return filteredArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
