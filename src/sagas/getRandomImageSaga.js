import { call, put } from 'redux-saga/effects';

import {
  GET_RANDOM_IMAGE_SUCCESS,
  GET_RANDOM_IMAGE_FAILURE,
} from '../redux/actions/Types';

//api
import { getRandomImage } from '../services/api';

export function* randomImageFetchSaga(action) {
  try {
    const response = yield call(getRandomImage, action.payload);

    const resPayload = response.data;

    // dispatch a success action to the store with the Images
    yield put({ type: GET_RANDOM_IMAGE_SUCCESS, resPayload });
  } catch (error) {
    yield put({ type: GET_RANDOM_IMAGE_FAILURE, error });
  }
}
