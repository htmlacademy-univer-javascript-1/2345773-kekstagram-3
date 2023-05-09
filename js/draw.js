import { findTemplate } from './util.js';

const pictureTemplate = findTemplate('#picture', '.picture');
const photoList = document.querySelector('.pictures');

export const drawPhotos = (photosInfo) => {
  photosInfo.forEach(({url, comments, likes}) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__comments').textContent = comments;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoList.appendChild(photoElement);
  });
};
