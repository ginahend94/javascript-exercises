const findTheOldest = function(array) {
    // Iterate through people
        return array.reduce((prevPerson, currentPerson) => {
            let prevAge;
            let currentAge;
        // See if yearOfDeath exists
            if ("yearOfDeath" in currentPerson) {
        // If so, calc age at death
                currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        // Else, calc current age
            }   else {
                currentAge = (new Date().getFullYear() - currentPerson.yearOfBirth);
            }
            if ("yearOfDeath" in prevPerson) {
                prevAge = prevPerson.yearOfDeath - prevPerson.yearOfBirth;
            }   else {
                prevAge = (new Date().getFullYear() - prevPerson.yearOfBirth);
            }
        // compare to previous
            if (prevAge > currentAge) return prevPerson;
            return currentPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
