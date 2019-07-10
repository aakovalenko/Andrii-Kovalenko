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

const organisation = {  
  name: 'Google',   
 info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']   } 
};

function getInfo({name,info:{partners:[first,second]}}) {

console.log(`Name: ${name}, Partners: ${first} ${second} `);

}

let org = getInfo(organisation);





