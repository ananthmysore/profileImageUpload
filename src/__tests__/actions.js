import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants/ActionTypes';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  const file = ''
  const requestOptions = {
    data: { link: 'aderaaij' }
  };

  const mockResult = { data: { link: 'aderaaij' } };


  it('UPLOAD_PROFILEIMAGE Action', () => {
    fetchMock.post(`https://api.imgur.com/3/image`, requestOptions);
    const expectedActions = {
      type: types.RESPONSE_UPLOAD_PROFILEIMAGE,
      response: mockResult,
    };
    const store = mockStore({ response: {} });
    return store.dispatch(actions.uploadProfileImage(file)).then(data => {
      expect(data).toEqual(expectedActions);
    });
  });
});