import * as types from '../constants/ActionTypes';
import rootReducer, {
  uploadedProfileImage
} from '../reducers';


describe('reducer tests', () => {
  it('should handle the uploaded profile image', () => {
    expect(
      uploadedProfileImage(
            {},
            {
                type: types.UPLOAD_PROFILEIMAGE,
                isFetching: true,
            }
        )
    ).toEqual({ isFetching: true });
    
    expect(
      uploadedProfileImage(
            {},
            {
                type: types.RESPONSE_UPLOAD_PROFILEIMAGE,
                isFetching: false,
            }
        )
    ).toEqual({ isFetching: false });
          
  });
});