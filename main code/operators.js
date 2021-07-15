//Discount price calculator;

var sellingPrice=100;
var listingPrice=509;

var discountPrice=((listingPrice-sellingPrice)/listingPrice)*100;

console.log("Discount percentage is : "+discountPrice);

//for avoiding the decimal values;

displayDiscountPercentage = Math.round(discountPrice);
console.log("Discount percentage is   :"+displayDiscountPercentage+"% off");


