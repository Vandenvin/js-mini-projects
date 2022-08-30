import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const STORAGE_KEY = 'fedback-form-state';
const formData = {};

form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onFormSubmit);

populateInputFromLocalStoradge();

function onInputChange(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  const formResult = {};

  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  formResult.email = email.value;
  formResult.message = message.value;

  console.log(formResult);

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateInputFromLocalStoradge() {
  const savedInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedInfo) {
    input.value = savedInfo.email;
    textarea.value = savedInfo.message;
  }
}
