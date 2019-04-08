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
  const numberToCheck = number;
  const checkLimit = (numberToCheck / 2);
  console.log('checkLimit', checkLimit);
  if (numberToCheck <= 1) {
    return false;
  }
  for (let i=2; i <= checkLimit; i++) {
    if (numberToCheck % i ===0) {
      return false;
    }
  }
  // add the logic here later, get the info flow working first
// done
  return true;
};

module.exports = PrimeNumberChecker;
