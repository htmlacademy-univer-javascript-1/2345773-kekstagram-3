const zoomInButton = document.querySelector('.scale__control--bigger');
const zoomOutButton = document.querySelector('.scale__control--smaller');
const scaleBar = document.querySelector('.scale__control--value');
export const imagePreview = document.querySelector('.img-upload__preview');

const SCALE_MAX = 100;
const SCALE_MIN = 25;

export function setScale(scale){
  scaleBar.value = `${scale}%`;
  imagePreview.style.scale = scale / 100;
}

zoomInButton.addEventListener('click', () => {
  changeImageScale(SCALE_MIN);
});

zoomOutButton.addEventListener('click', () => {
  changeImageScale(-SCALE_MIN);
});

function changeImageScale(step) {
  const currScale = Number(scaleBar.value.slice(0, -1));
  const newScale = currScale + step;
  if (SCALE_MIN <= newScale && newScale <= SCALE_MAX) {
    setScale(newScale);
  }
}
