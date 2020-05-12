import * as types from '../actionTypes/chatTypes';

const initialState = {
  activeDialog: null,
};

export default function chatReducer(state = initialState, action) {
  if (action.type === types.SET_ACTIVE_DIALOG) {
    return {
      ...state,
      activeDialog: action.id,
    };
  }
  return state;
}
