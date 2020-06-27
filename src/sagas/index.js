import { takeLatest, all } from 'redux-saga/effects';

import { GET_RANDOM_IMAGE_REQUEST } from '../redux/actions/Types';

import { randomImageFetchSaga } from './getRandomImageSaga';

export default function* rootSagas() {
  yield all([takeLatest(GET_RANDOM_IMAGE_REQUEST, randomImageFetchSaga)]);
}
