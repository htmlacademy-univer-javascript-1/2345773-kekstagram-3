import { isEsc } from './util.js';

const downloadButton = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

function cleanForm() {
  downloadButton.value = '';
  hashtagInput.value = '';
  commentInput.value = '';
}

function onFormEscapeKeyDown(evt) {
  if (isEsc(evt)) {
    evt.preventDefault();
    closeDownloadPhotoWindow();
  }
}

function openDownloadPhotoWindow() {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onFormEscapeKeyDown);
}

function closeDownloadPhotoWindow() {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFormEscapeKeyDown);
  cleanForm();
}


downloadButton.addEventListener('change', () => {
  openDownloadPhotoWindow();
});

cancelButton.addEventListener('click', () => {
  closeDownloadPhotoWindow();
});
