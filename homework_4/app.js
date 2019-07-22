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
