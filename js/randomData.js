import {randomIntInRange} from './util.js';

export const createPhoto = (id) => ({
  id: `${id}`,
  url: `photos/${id}.jpg`,
  description: `Full pants of random: ${id}`,
  likes: randomIntInRange(15, 200),
  comments: randomIntInRange(0, 200),
});

export const generatePhotosArray = (descriptionNumber) =>
  Array.from({length: descriptionNumber}, (_, k) =>
    createPhoto(k+1));
