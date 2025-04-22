const leapYears = function(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true;
    } else {
        return false;
    }
};


// console.log(leapYears(2000)); 
// is a leap year: returns true

// Do not edit below this line
module.exports = leapYears;
