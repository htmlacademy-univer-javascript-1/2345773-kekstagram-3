import { randint } from './util.js';

const getPhotoArray = function(){
  const result =[];
  for (let i = 0; i <=24; i++){
    result.push(
      {
        id: i+1,
        url: 'photos/'.concat(i+1, '.jpg'),
        description: '',
        likes: randint(15,200),
        comments: randint(1,200)
      }
    );
  }
  return result;
};

export{
  getPhotoArray
};
