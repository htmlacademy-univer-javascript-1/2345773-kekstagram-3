const PHOTOS_URL = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const URL_TO_SEND = 'https://27.javascript.pages.academy/kekstagram-simple';

export const getPhotos = (onSuccess, onError) => {
  fetch(PHOTOS_URL, {
    method: 'GET',
    credentials: 'same-origin',
  })
    .then((response) =>{
      if(response.ok){
        return response.json();
      }
      else{
        throw new Error(`${response.status} ${response.statusText}`);
      }
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      onError(err);
    });

};

export const sendData = (onSuccess, onError, body) => {
  fetch(URL_TO_SEND,{
    method: 'POST',
    body,
  })
    .then((response)=>{
      if(response.ok){
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(onError);
};
