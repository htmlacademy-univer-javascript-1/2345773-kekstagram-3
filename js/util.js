const randint = function (min, max){
  if (max < min && max >= 0 && min >= 0) {
    return 0;
  }
  return Math.floor(Math.random * (max - min + 1) + min);
};


const permittedString = function (str, permLen){
  if (str.length > permLen) {
    return false;
  }
  return true;
};

const isEsc = function (evt){
  return evt.key === 'Escape';
};

export{
  randint,
  permittedString,
  isEsc
};
