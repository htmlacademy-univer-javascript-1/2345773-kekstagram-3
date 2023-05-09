import { isEscKey } from './util.js';
import { setEffect } from './effects.js';
import { setScale } from './scale.js';
import { formIsValid } from './validation.js';
import { sendData } from './data.js';
import { showUploadFailMessage, showUploadSuccessMessage } from './messages.js';

const editWindow = document.querySelector('.img-upload__overlay');
const uploadButton = document.querySelector('.img-upload__submit');
const cancelButton = document.querySelector('#upload-cancel');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
const imgUploadForm = document.querySelector('.img-upload__form');
export const uploadFile = imgUploadForm.querySelector('#upload-file');
const postInfo = editWindow.querySelector('.img-upload__text');


export function cleanForm() {
  imgUploadForm.reset();
  setEffect('none');
  setScale(100);
  uploadButton.value = '';
  hashtagInput.value = '';
  commentInput.value = '';
}

function escapeOnForm (evt){
  if (isEscKey(evt)) {
    evt.preventDefault();
    closeUploadPhotoWindow();
  }
}

let formUploading = false;


export const updateButtonStatus = () => {
  if (formUploading) {
    return;
  }
  uploadButton.disabled = !formIsValid(true);
};

postInfo.addEventListener('input', updateButtonStatus);


export const blockSubmitButton = () => {
  formUploading = true;
  uploadButton.disabled = true;
  uploadButton.textContent = 'Сохраняю...';
};

export const unblockSubmitButton = () => {
  formUploading = false;
  uploadButton.disabled = false;
  uploadButton.textContent = 'Сохранить';
};

export function openUploadPhotoWindow() {
  editWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');
  unblockSubmitButton();
  document.addEventListener('keydown', escapeOnForm);
}

function closeUploadPhotoWindow() {
  editWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', escapeOnForm);
  cleanForm();

}

uploadFile.addEventListener('change', () => {
  openUploadPhotoWindow();
});


cancelButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeUploadPhotoWindow();
});

imgUploadForm.addEventListener('submit', (evt) =>{
  evt.preventDefault();

  if (!formIsValid()){
    return;
  }
  blockSubmitButton();
  sendData(
    ()=>{
      closeUploadPhotoWindow();
      showUploadSuccessMessage();
      unblockSubmitButton();
    },
    ()=>{
      showUploadFailMessage();
      unblockSubmitButton();
    },
    new FormData(evt.target)
  );

});
