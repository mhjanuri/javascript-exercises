const removeFromArray = function(arr, ...args) {
    let newArray = [];

    arr.forEach(function(item) {
        if (args.includes(item) == false) {
            newArray.push(item);
        };
    });

    return newArray;
};

// let array = [1,2,3,4];
// let num = 3;
// let newArray = [];

// array.forEach(function(item) {
//     if (item != num) {
//         newArray.push(item);
        
//     }
// });
// console.log(newArray);


// should remove 3 and return [1,2,4]
// console.log(removeFromArray([1, 2, 3, 4], 3));


// Do not edit below this line
module.exports = removeFromArray;
