import {
  UPLOAD_PROFILEIMAGE,
  RESPONSE_UPLOAD_PROFILEIMAGE,
  RESPONSE_ERROR_UPLOAD_PROFILEIMAGE
} from './constants/ActionTypes';

export function uploadImage() {
  return {
      type: UPLOAD_PROFILEIMAGE,
  };
}
export function receiveResponseImgur(res) {
  return {
      type: RESPONSE_UPLOAD_PROFILEIMAGE,
      response: res,
  };
}
export function receiveResponseImgurErr(error) {
  return {
      type: RESPONSE_ERROR_UPLOAD_PROFILEIMAGE,
      error,
  };
}

export function uploadProfileImage(file) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Client-ID ${process.env.REACT_APP_API_KEY}`);
  const formdata = new FormData();
  formdata.append("image", file);
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };
  return dispatch => {
    dispatch(uploadImage())
    return fetch('https://api.imgur.com/3/image', requestOptions)
    .then(response => response.json())
    .then(result => dispatch(receiveResponseImgur(result)))
    .catch(error => dispatch(receiveResponseImgurErr(error)));
  };
};