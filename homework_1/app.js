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
