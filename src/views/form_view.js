const PubSub = require('../helpers/pub_sub.js');
const FormView = function() {

};

FormView.prototype.clearNumber = function() {
  const form = document.querySelector('#prime-checker-form');
  form.reset();
};

FormView.prototype.bindEvents = function() {
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit',(event) => {
    event.preventDefault();
    const inputtedNumber = event.target.number.value;
    PubSub.publish('number-input',inputtedNumber);
  });

  PubSub.subscribe('prime-checked', (event)=>{
    this.clearNumber();
  });
};

module.exports = FormView;
