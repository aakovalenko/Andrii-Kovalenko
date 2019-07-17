//1.

const rectangle = {
  width: 5,
  height: 6,
  getSquare: function() {
    return this.width * this.height;
  }
};

console.log(rectangle.getSquare());

//2.
const price = {
  price: 10,
  discount: "15%",
  getPrice: function() {
    return this.price;
  },
  getPriceWithDiscount: function() {
    // % from price
    let percentFromPrice = (this.price * parseInt(this.discount)) / 100;
    return this.price - percentFromPrice;
  }
};

console.log(price.getPrice());
console.log(price.getPriceWithDiscount());

//3
const objHeight = {
  height: 10,
  heightPlusOne: function() {
    testObj = objHeight;
    testObj.height = this.height + 1;
    return this.height;
  }
};
console.log(objHeight.heightPlusOne());
console.log(objHeight.height);

//4
const numerator = {
  value: 1,
  double: function() {
    newValue = numerator;
    newValue.value *= 2;
    return this;
  },
  plusOne: function() {
    newValue = numerator;
    newValue.value += 1;
    return this;
  },
  minusOne: function() {
    newValue = numerator;
    newValue.value -= 1;
    return this;
  }
};
console.log(
  numerator
    .double()
    .plusOne()
    .plusOne()
    .minusOne()
);
console.log(numerator.value);

//5
const productObj = {
  price: 600,
  count: 50,
  totalCost: function() {
    return this.price * this.count;
  }
};
console.log(productObj.totalCost());

//6
const detailObj = {
  count: 345,
  price: 12.99
};
console.log(
  `Общая стоимость всех деталей - ${productObj.totalCost.call(detailObj)}`
);

//7
let sizes = { width: 5, height: 10 },
  getSquare = function() {
    return this.width * this.height;
  };
console.log(getSquare.call(sizes));

//8

let element = {
  height: 25,
  getHeight: function() {
    return this.height;
  }
};
//let getElementHeight = element.getHeight;
getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight());

//9
let odd = [1, 2, 3, 5, 8, 9, 10];
let newOdd = odd.map(function(num) {
  if (num % 2 > 0) {
    return { digit: num, odd: false };
  } else {
    return { digit: num, odd: true };
  }
});
console.log(newOdd);

//10
let arr = [12, 4, 50, 1, 0, 18, 40];
function isAboveZero(num) {
  return num > 0;
}
console.log(arr.every(isAboveZero));

//11
let arr2 = ["yes", "hello", "no", "easycode", "what"];

function moreThenThreeLetters(str) {
  return str.length > 3;
}
console.log(arr2.some(moreThenThreeLetters));

//12
const arrObj = [
  { char: "a", index: 12 },
  { char: "w", index: 8 },
  { char: "Y", index: 10 },
  { char: "p", index: 3 },
  { char: "p", index: 2 },
  { char: "N", index: 6 },
  { char: " ", index: 5 },
  { char: "y", index: 4 },
  { char: "r", index: 13 },
  { char: "H", index: 0 },
  { char: "e", index: 11 },
  { char: "a", index: 1 },
  { char: " ", index: 9 },
  { char: "!", index: 14 },
  { char: "e", index: 7 }
];

function returnStr(arr) {
  const sortArr = arr.sort(
    (prevChar, nextChar) => prevChar.index - nextChar.index
  );

  console.log(sortArr);

  const newStr = sortArr.reduce((acc, str) => {
    return acc + str.char;
  }, "");
  return newStr;
}
const hny = returnStr(arrObj);
console.log(hny);

//13
const diffArr = [ [14, 45], [1], ['a', 'c', 'd'] ];
const sortDiffArr = diffArr.sort((arrPrev, arrNext) => arrPrev.length - arrNext.length);
console.log(sortDiffArr);
//14
const cores = [
  { cpu: "intel", info: { cores: 2, сache: 3 } },
  { cpu: "intel", info: { cores: 4, сache: 4 } },
  { cpu: "amd", info: { cores: 1, сache: 1 } },
  { cpu: "intel", info: { cores: 3, сache: 2 } },
  { cpu: "amd", info: { cores: 4, сache: 2 } }
];
const sortCores = cores.sort(
  (prevCore, nextCore) => prevCore.info.cores - nextCore.info.cores
);
console.log(sortCores);

//15
let products = [
  {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
  {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
  {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
  {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
  ];

  function filterCollection(products, price1, price2) {
    const sortedProduct = products.filter(product => product.price > price1 && product.price < price2);
    const sortedProduct2 = sortedProduct.sort((prodPrev, prodNex) => prodPrev.price - prodNex.price);
    console.log(sortedProduct2);
  }

  filterCollection(products, 15, 30);
