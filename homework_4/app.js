//1
const getHead = document.head;
console.log(getHead);
//2
const getBody = document.body;
console.log(getBody);
//3
const getChildrenBody = getBody.children;
console.log(getChildrenBody);

const firstDiv = document.body.firstElementChild;
console.log(firstDiv);
//4a
const firstDivNodes = document.body.firstElementChild.children;
console.log(firstDivNodes);
//4b

for (let i = 1; i < firstDivNodes.length -1; i++) {
 console.log(firstDivNodes[i]) ;
}

//5
function isParent(parent, child) {
  //console.log(parent);
  console.log(`***************`);
  console.log(child);
   console.log(`***************`);
  //const z = child.closest(parent);

}
isParent(document.body.children[3], document.querySelector('mark'));

//6
const a = document.querySelectorAll('a');
a.forEach( a => {
  if (!a.closest('ul')){
    console.log(a);
  }
});
//console.log(newA);

//7
const elem = document.querySelector('ul');
const nextElemAfterUl = elem.nextElementSibling;
const prevElemAfterUl = elem.previousElementSibling
console.log(nextElemAfterUl);
console.log(prevElemAfterUl);

//8
const users = [
  {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00",
		"nestedField": { total: 300 }
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00",
		"nestedField": { total: 400 }
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00",
		"nestedField": { total: 200 }
  }
];

const resultBalanceUser = users.reduce( (acc,user) => {
  
  return acc + user.balance;
},0);

const userTh = [
  "#","name", "email", "balance"
]

const tableDiv = document.querySelector(".myTable");

const myTable = document.createElement("table");
const myTr = document.createElement("tr");
const userTr = document.createElement("tr");

const userTrBalance = document.createElement("tr");
const userTdBalance = document.createElement("td");
const emptyTdBalance = document.createElement("td");
const emptyTdBalance2 = document.createElement("td");
const emptyTdBalance3 = document.createElement("td");
userTdBalance.textContent = `Balance: ${resultBalanceUser}`;

const userThFragment = document.createDocumentFragment();
const userTdFragment = document.createDocumentFragment();

userTh.forEach(uth => {
  const thDomEl = document.createElement('th');
  thDomEl.textContent = uth.toUpperCase();
  userThFragment.appendChild(thDomEl);
});

tableDiv.appendChild(myTable);
myTable.appendChild(myTr);
myTr.appendChild(userThFragment);
myTable.appendChild(userTr);

console.log(users.length);

for (z = 0; z < users.length; z++) {
  
  for (let i = 0; i < users.length; i++) {
    const userTrNextGen = document.createElement("tr");

    const {name, email, balance} = users[i];

    const tdDomEl = document.createElement('td');
    tdDomEl.textContent = i + 1 ;
     const tdDomEl1 = document.createElement('td');
     tdDomEl1.textContent = name ;
  
     const tdDomEl2 = document.createElement('td');
     tdDomEl2.textContent = email ;
  
     const tdDomEl3 = document.createElement('td');
     tdDomEl3.textContent = balance ;
     
     userTdFragment.appendChild(tdDomEl);
    userTdFragment.appendChild(tdDomEl1);
    userTdFragment.appendChild(tdDomEl2);
    userTdFragment.appendChild(tdDomEl3); 

    userTrNextGen.appendChild(userTdFragment); 
    myTable.appendChild(userTrNextGen); 
  }
  break;
}

myTable.appendChild(userTrBalance);
userTrBalance.appendChild(emptyTdBalance);
userTrBalance.appendChild(emptyTdBalance2);
userTrBalance.appendChild(emptyTdBalance3);
userTrBalance.appendChild(userTdBalance);

// 9.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в
// атрибуте data-text у кнопки.
const btn = document.querySelector('#btn-msg');

btn.addEventListener('click', handler => {
  alert(btn.dataset.text);
});


//3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.










