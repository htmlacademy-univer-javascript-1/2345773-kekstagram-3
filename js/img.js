import { getPhotos } from './data.js';
import { showDownloadAlert } from './alert.js';

const miniaturesFragment = document.createDocumentFragment();


const miniaturesList = document.querySelector('.pictures');
const miniaturesTemp = document.querySelector('#picture').content;

function imgIndex(){
  getPhotos(
    drawProvidedPhotos,
    showDownloadAlert
  );
}

function drawProvidedPhotos(simularMiniatures) {
  simularMiniatures.forEach(({url, likes, comments}) => {
    const miniatures = miniaturesTemp.cloneNode(true);
    miniatures.querySelector('.picture__img').src = url;
    miniatures.querySelector('.picture__likes').textContent=likes;
    miniatures.querySelector('.picture__comments').textContent=comments;
    miniaturesFragment.appendChild(miniatures);
  });
  miniaturesList.appendChild(miniaturesFragment);
}
export{
  imgIndex
};
