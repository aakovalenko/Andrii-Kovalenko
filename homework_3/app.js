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
