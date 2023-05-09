export const effectsList = document.querySelector('.effects__list');
const img = document.querySelector('.img-upload__preview');

export const setEffect = (newEffect) =>{
  img.classList = '';
  img.classList.add(`effects__preview--${newEffect}`);
};


effectsList.addEventListener('change', (evt) => {
  const currentEffect = evt.target;
  if (currentEffect.tagName !== 'INPUT') {
    return;
  }
  setEffect(currentEffect.value);
});
