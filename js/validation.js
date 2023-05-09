import { stringLengthValidation } from './util.js';

const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

pristine.addValidator(
  form.querySelector('.text__description'),
  validateComments,
  'От 20 до 140 символов'
);

pristine.addValidator(
  form.querySelector('.text__hashtags'),
  validateHashtags,
  '# и от 3 до 15 символов'
);

form.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

function validateComments(value) {
  return !stringLengthValidation(value, 19) && stringLengthValidation(value, 140);
}

function validateHashtags(value){
  return value[0]==='#' && !stringLengthValidation(value,3) && stringLengthValidation(value,15);
}

export const formIsValid = (silent = false) => pristine.validate(silent);
