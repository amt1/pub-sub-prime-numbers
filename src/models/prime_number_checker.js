const PubSub = require( '../helpers/pub_sub.js');
const PrimeNumberChecker = function() {

};

PrimeNumberChecker.prototype.bindEvents = function(){
  const callback = (event)=>{
    const inputtedNumber = event.detail;
    const isItPrime = this.checkPrime(inputtedNumber);
    console.log(isItPrime);
    PubSub.publish('prime-checked', isItPrime);
  };
  PubSub.subscribe('number-input', callback);
};

PrimeNumberChecker.prototype.checkPrime = function (number) { // NEW
  const ifItsPrime = true;
  // add the logic here later, get the info flow working first
  return ifItsPrime;
};

module.exports = PrimeNumberChecker;
