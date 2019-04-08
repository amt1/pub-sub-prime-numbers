const FormView = require('./views/form_view.js');
const ResultView = require('./views/result_view.js');
const PrimeNumberChecker = require('./models/prime_number_checker.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const formView = new FormView();
  formView.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();

  const primeNumberChecker = new PrimeNumberChecker();
  primeNumberChecker.bindEvents();
});
