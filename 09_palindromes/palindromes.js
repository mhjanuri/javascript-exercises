const palindromes = function (str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let char = str [i]
        
        if (/[a-zA-Z0-9]/.test(char)) {
            arr.push(char.toLowerCase());
        }
    }
    let reverse = arr.slice().reverse().join("");
    return arr.join("") === reverse;
};

// console.log(palindromes('Lid off a daffodil'));


// Do not edit below this line
module.exports = palindromes;
