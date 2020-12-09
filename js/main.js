var elForm = document.querySelector('.form');
var elFormInput = document.querySelector('.form-input');
var elFormBtn = document.querySelector('.form-btn');
var elOutput = document.querySelector('.output');




elForm.addEventListener('submit', function (evt) {
  evt.preventDefault();



  if (elFormInput.value <= 0) {
    elOutput.textContent = '0 дан катта сон киритинг';
  } else if (elFormInput.value % 15 === 0) {
    elOutput.textContent = 'FiZzBuZz';
  }  else if (elFormInput.value % 3 === 0) {
    elOutput.textContent = 'FiZz';
  } else if (elFormInput.value % 5 === 0) {
    elOutput.textContent = 'BuZz';
  } else {
    elOutput.textContent = ':(';
  }
});