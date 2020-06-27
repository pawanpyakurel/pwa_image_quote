import {
  GET_RANDOM_IMAGE_REQUEST,
  GET_RANDOM_IMAGE_SUCCESS,
  GET_RANDOM_IMAGE_FAILURE,
} from '../actions/Types';

import { mergeQuoteImage } from '../../utils';
//reducer with initial state
const initialState = {
  fetching: false,
  sucess: null,
  failure: null,
  imageQuote: null,
};

export const randomImages = (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM_IMAGE_REQUEST:
      return {
        ...state,
        fetching: true,
      };
    case GET_RANDOM_IMAGE_SUCCESS:
      return {
        ...state,
        sucess: true,
        fetching: false,
        imageQuote: mergeQuoteImage(action.resPayload),
      };
    case GET_RANDOM_IMAGE_FAILURE:
      return {
        ...state,
        fetching: false,
        failure: true,
      };
    default:
      return state;
  }
};
