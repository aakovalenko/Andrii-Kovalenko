/*1 */

function multiply() {
  let num = arguments;
	let i = 0, rez = num[0];

	if (num.length == 0){
		return 0;
	}
  for (i; i < num.length; i++) {
		 rez *= num[i];	 
	}
	return rez;
}

let z = multiply(45,656);
//console.log(z)

/* 2 */

function reverseString(str) {
  let reverseString = "",
    i;

  for (i = str.lenght - 1; i >= 0; i--) {
    reverseString += str(i);
  }
  return reverseString;
}
reverseString("test");

/* 3 */

function getCodeStringFromText(str) {
	let uniStr = '', i;
	for (i = 0; i < str.length; i++){
		uniStr += str.charCodeAt(i) + ' ';
	}
	return uniStr;
}

var rez = getCodeStringFromText('hello');
console.log(rez); 

/* 4 */
function guessTheNumber(num) {
	let randomNumber = Math.floor(Math.random() * 10) + 1

		if (typeof num === 'number'){
				if (num <= 10 && num > 0) {
						if (num == randomNumber){
							console.log('Вы выиграли!');
						} else {
							console.log(`Вы не угадали ваше число ${num} а выпало число ${randomNumber}`)
						}
				}
		}else {
			alert('Its not a number');
		} 
}

guessTheNumber(7);

/* 5 */

function getArray(num) {
	let newArr = [], i = 1;
for (i; i <= num; i++){
	newArr.push(i);
}
	return newArr;
	
}

let rezi = getArray(7);
console.log(rezi);

/* 6 */
function doubleArray(arr) {
	let dblArr;
	dblArr = arr.concat(arr);
	return dblArr;
}
var arr = doubleArray([1,2,3]);
console.log(arr);

/* 7 */
function changeCollection() {
	let newArr = arguments, i = 0;

	for (i; i < newArr.length; i++) {
		newArr[i].shift(0);
	}
	return newArr;
}

var ava = changeCollection([1,2,3], ['a', 'b', 'c']);
console.log(ava);