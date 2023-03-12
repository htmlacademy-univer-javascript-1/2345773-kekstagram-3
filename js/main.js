const randint = function (min, max){
  if (max < min) { return 0; }
  return Math.floor(Math.random * (max - min + 1) + min);
};

randint(20, 30);

const permittedString = function (str, permLen){
  if (str.length > permLen) { return false; }
  return true;
};

permittedString('Seven', 7);
