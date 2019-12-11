// write the code to sum all
let salaries = {
	john: 100,
	Ann: 160,
	Pete: 130
};
console.log(Object.values(salaries).reduce((sum, salary) => (sum += salary), 0));

// create a function multiplyNumeric(obj)
let menus = {
	width: 200,
	height: 300,
	title: 'my menu'
};
console.log(Object.values(menus).filter(menu => !isNaN(menu)).map(x => x * 2))

// given an array of Numbers sort number in order, even, then odd
let arr = [ 1, 23, 5, 2, 9, 8, 7, 10, 22, 6 ];
console.log(arr.sort((a, b) => a % 2 - b % 2))

//a function that determines a max number
const datas = [ 2, 44, 21, 4, 32, 211, 23, 45 ];
console.log(datas.reduce((a, b) => a > b ? a : b))

