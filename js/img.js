import { getPhotoArray } from './data.js';

const miniaturesFragment = document.createDocumentFragment();


const miniaturesList = document.querySelector('.pictures');
const miniaturesTemp = document.querySelector('#picture').content.querySelector('.picture');

function imgIndex(){
  const simularMiniatures = getPhotoArray();
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
