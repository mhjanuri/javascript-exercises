const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'
    }
    let i = 0;
    let arr = [];
    while (i < num) {
        arr.push(string);
        i++;
    }
    return arr.join("");
};

// console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
