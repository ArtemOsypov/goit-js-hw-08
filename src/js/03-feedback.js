import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea[name="message"]'),
  email: document.querySelector('input[name="email"]'),
};

const STORAGE_KEY = 'feedback-form-state';
const submitData = {};

refs.form.addEventListener('submit', onFormSubmit);

hasLocalStorage();

refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(evt) {
  submitData[evt.target.name] = evt.target.value;
  const inputData = JSON.stringify(submitData);
  localStorage.setItem(STORAGE_KEY, inputData);
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const submitItem = localStorage.getItem(STORAGE_KEY);
  const objSubmitItem = JSON.parse(submitItem);
  console.log(objSubmitItem);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function hasLocalStorage() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const outStorage = JSON.parse(savedMessage);

  if (outStorage) {
    refs.textarea.value = outStorage.message;
    refs.email.value = outStorage.email;
  }
}
