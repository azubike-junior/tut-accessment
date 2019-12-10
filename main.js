// write the code to sum all
let salaries = {
    john: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0
for (let key in salaries) {
    sum += salaries[key]
}
// console.log(sum)

// create a function multiplyNumeric(obj)
let menu = {
    width: 200,
    height: 300,
    title: "my menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (!isNaN (obj[key])) {
             console.log(obj[key] *= 2)
        }
    }
}
multiplyNumeric(menu)

// given an array of Numbers sort number in order, even, then odd
let arr = [1, 23, 5, 2, 9, 8, 7, 10, 22, 6]
// console.log(arr.sort((a, b) => a % 2 - b % 2))



//a function that determines a max number
const data = [ 2, 44, 21, 4, 32, 211, 23, 45]

function MaxNo(values){
    let largest = 0;
    for(let i=0; i<values.length; i = i+1){
        if(values[i] > largest){
            largest = values[i]
        }
    }
    return largest
}
// console.log(MaxNo(data))
