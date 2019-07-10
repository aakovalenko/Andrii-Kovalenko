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

const sum = (...args) => {
  const params = Array.prototype.slice.call(args);
  if (!params.length) return 0;

  const prev_next = (prev, next) => prev + next;

  return params.reduce(prev_next);
}

console.log(sum(1, 2, 3, 4));








