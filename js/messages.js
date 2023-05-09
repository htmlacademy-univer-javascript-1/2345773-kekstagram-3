import { cleanForm, openUploadPhotoWindow, uploadFile } from './form.js';
import { findTemplate, isEscKey } from './util.js';
const imgUploadOverlayElement = document.querySelector('.img-upload__overlay');

export const setESCListener = (funcToClose) =>
  (evt) => {
    if (!isEscKey(evt)) {
      return;
    }
    evt.preventDefault();
    funcToClose();
  };

export const showUploadFailMessage = () => {
  const alertElement = findTemplate('#error', '.error').cloneNode(true);
  imgUploadOverlayElement.classList.add('hidden');
  const ESCListener = setESCListener(closeUploadFailMessage);

  function closeUploadFailMessage() {
    document.body.removeChild(alertElement);
    document.removeEventListener('keydown', ESCListener);
    imgUploadOverlayElement.classList.remove('hidden');
    alertElement.removeEventListener('keydown', ESCListener);
  }

  const errorButton = alertElement.querySelector('.error__button');
  errorButton.addEventListener('click', (evt)=> {
    evt.preventDefault();
    cleanForm();
    uploadFile.click();
  });

  alertElement.addEventListener('click', (evt) => {
    if (evt.target.type === 'button' ||
     evt.target.classList.contains('error')) {
      closeUploadFailMessage(ESCListener);
      openUploadPhotoWindow();
    }
  });
  document.addEventListener('keydown', ESCListener);
  document.body.appendChild(alertElement);
};


export const showUploadSuccessMessage = () => {
  const successElement = findTemplate('#success', '.success').cloneNode(true);
  const ESCListener = setESCListener(closeDataSuccessMessage);

  function closeDataSuccessMessage() {
    document.body.removeChild(successElement);
    cleanForm();
    document.removeEventListener('keydown', ESCListener);
  }

  successElement.addEventListener('click', (evt) => {
    if (evt.target.type === 'button' ||
     evt.target.classList.contains('success')) {
      closeDataSuccessMessage(ESCListener);
    }
  });
  document.addEventListener('keydown', ESCListener);
  document.body.appendChild(successElement);
};
