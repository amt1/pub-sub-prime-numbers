const PubSub = require('../helpers/pub_sub.js');

const ResultView  = function () {

};

ResultView.prototype.displayResult = function(isItPrime) {
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `This number is prime: ${isItPrime}`;
};

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe('prime-checked', (event) => {
      const isItPrime = event.detail;
      this.displayResult(isItPrime);

  });
};

module.exports = ResultView;
