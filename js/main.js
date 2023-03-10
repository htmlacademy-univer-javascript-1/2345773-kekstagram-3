const randint = function (min, max){
  if (max < min) { return 0; }
  return Math.floor(Math.random * (max - min + 1) + min);
};

const permittedString = function (str, permLen){
  if (str.length > permLen) { return false; }
  return true;
};
