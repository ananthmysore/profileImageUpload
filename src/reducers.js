import { combineReducers } from 'redux';
import {
  UPLOAD_PROFILEIMAGE,
  RESPONSE_UPLOAD_PROFILEIMAGE
} from './constants/ActionTypes';

export function uploadedProfileImage(
  state = {
      isFetching: false,
      response: {},
  },
  action
) {
  switch (action.type) {
      case UPLOAD_PROFILEIMAGE:
        return Object.assign({}, state, {
          isFetching: true,
      });
      case RESPONSE_UPLOAD_PROFILEIMAGE:
        return Object.assign({}, state, {
          isFetching: false,
          response: action.response,
      });
      default:
          return state;
  }
}

const rootReducer = combineReducers({
  uploadedProfileImage,
});

export default rootReducer;
