import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

const STORAGE_KEY = 'feedback-form-state';
let submitData = {};

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
  console.log(submitData);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  submitData = {};
}

function hasLocalStorage() {
  try {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
      submitData = JSON.parse(savedMessage);
      Object.entries(submitData).forEach(([key, value]) => {
        refs.form[key].value = value;
      });
    }
  } catch (error) {
    console.log(error.name);
  }
}
