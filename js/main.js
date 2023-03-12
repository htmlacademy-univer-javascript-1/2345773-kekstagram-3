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

const getPhotoArray = function(){
  const result =[];
  for (let i = 0; i <=24; i++){
    result.push(
      {
        id: i+1,
        url: 'photos/'.concat(i+1, '.jpg'),
        description: '',
        likes: randint(15,200),
        comments: randint(0,200)
      }
    );
    return result;
  }
};

getPhotoArray();
