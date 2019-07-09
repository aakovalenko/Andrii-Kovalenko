//Деструктурирующее присваивание
// Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

// func(‘a’, ‘b’, ‘c’, ‘d’) → 
// {
//   first: ‘a’,
//   other: [‘b’, ‘c’, ‘d’]
// }

function retObj() {
  const abc = arguments;

  const [first, ...other ] = abc;

  let z = [first, other];
  console.log(typeof z);
  return z;
}

let res2 = retObj('a','b','c','d');
console.log(res2);




