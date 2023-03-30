import { getPhotoArray } from './data.js';

const miniaturesFragment = document.createDocumentFragment();


const miniaturesList = document.querySelector('.pictures');
const miniaturesTemp = document.querySelector('#picture').content;

const simularMiniatures = getPhotoArray;
simularMiniatures.forEach(({url, likes, comments})=>{
  const miniatures = miniaturesTemp.cloneNode(true);
  miniatures.querySelector('.picture__img').src = url;
  miniatures.querySelector('.picture__likes').textContent=likes;
  miniatures.querySelector('.picture__comments').textContent=comments.length;
  miniaturesFragment.appendChild(miniatures);
});
miniaturesList.appendChild(miniaturesFragment);
