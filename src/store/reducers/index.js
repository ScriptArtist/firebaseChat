import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import chatReducer from './chat';

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  chat: chatReducer,
});
