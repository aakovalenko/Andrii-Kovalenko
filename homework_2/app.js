//1.Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:
//

// function retObj() {
//   const [first, ...other ] = abc;
//   let z = [first, other];
//   return z;
// }

// let res = sum(1,2,3,4);
// let res2 = retObj('a','b','c','d');
// console.log(res);
// console.log(res2);

//2. Организовать функцию getInfo, которая принимает объект вида
// { name: ...,  info: { employees: [...], partners: [ … ]  } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

// const organisation = {  
//   name: 'Google',   
//   info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing']   } 
// };
// getInfo(organisation); → 
// Name: Google 
// Partners: Microsoft Facebook

// const organisation = {  
//   name: 'Google',   
//  info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']   } 
// };

// function getInfo({name,info:{partners:[first,second]}}) {

// console.log(`Name: ${name}, Partners: ${first} ${second} `);

// }

// let org = getInfo(organisation);

// Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):

// function sum() {
//   const params = Array.prototype.slice.call(arguments);

//   if (!params.length) return 0;

//   return params.reduce(function (prev, next) { return prev + next; });
// }

// sum(1, 2, 3, 4); // 10
// sum(); // 0

// const sum = (...args) => {
//   const params = Array.prototype.slice.call(args);
//   if (!params.length) return 0;

//   const prev_next = (prev, next) => prev + next;

//   return params.reduce(prev_next);
// }

// console.log(sum(1, 2, 3, 4));

//4. 
function takeArrWithCallback(arr, handler1) {
  let value = 'New value';
  handler1(arr);
  console.log(`${value} : ${handler1(arr)}`);
}

function callBack1(arr) {
  let newStr = '';
  
  for (let i = 0; i < arr.length; i++) {
    newStr += arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return newStr;
}

function callBack2(arr) {
  let newInt = '';
  
  for (let i = 0; i < arr.length; i++) {
    newInt += arr[i] * 10+',';
  }
  return newInt;
}

function callBack3(arr) {
  let newStr = '';
  
  for (let i = 0; i < arr.length; i++) {
    const {name, age} = arr[i];
    newStr += (`${name} is ${age}`) + ',';
  }
  return newStr;
}

function callBack4(arr) {
  let newStr = '';

  for (let i = 0; i < arr.length; i++) {
   
    let newArr = arr[i] + ',';
    for (let y = newArr.length -1 ; y >= 0; y--) {
        newStr += newArr[y] ;
    }
  }
  return newStr;
}

//const res = takeArrWithCallback(['my', 'name', 'is', 'Trinity'], callBack1);
//const res = takeArrWithCallback([10, 20, 30], callBack2);
//const res = takeArrWithCallback([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], callBack3);
const res = takeArrWithCallback(['abc', '123'], callBack4);
//console.log(res);






