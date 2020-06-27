import { GET_RANDOM_IMAGE_REQUEST } from './Types';

export const getRandomImage = (data) => ({
  type: GET_RANDOM_IMAGE_REQUEST,
  payload: data,
});
