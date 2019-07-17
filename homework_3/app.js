//1.

const rectangle = {
  width: 5,
  height: 6,
  getSquare:  function(){return this.width * this.height} 
}

console.log(rectangle.getSquare());

//2.
const price = {
  price: 10,
  discount: '15%',
  getPrice: function () {return this.price},
  getPriceWithDiscount: function () {
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
     testObj.height = this.height + 1
     return this.height;
    }
 }
 console.log(objHeight.heightPlusOne());
 console.log(objHeight.height);

 //4
 const numerator = {
  value: 1,
  double: function () {
    newValue = numerator;
    newValue.value *= 2;
    return this;
  },
  plusOne: function () {
    newValue = numerator;
    newValue.value += 1;
    return this;
  },
  minusOne: function () {
    newValue = numerator;
    newValue.value -= 1;
    return this;
  },
}
console.log(numerator.double().plusOne().plusOne().minusOne());
console.log(numerator.value);

//5 
const productObj = {
  price: 600,
  count: 50,
  totalCost: function () {return this.price * this.count}
}
console.log(productObj.totalCost());

//6
const detailObj = {
  count: 345,
  price: 12.99
}
console.log(`Общая стоимость всех деталей - ${productObj.totalCost.call(detailObj)}`);


//7
let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};
console.log(getSquare.call(sizes));

//8 

let element = {
  height: 25,
  getHeight: function () {return this.height;}
};
//let getElementHeight = element.getHeight;
getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight());

