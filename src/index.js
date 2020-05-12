import React from 'react';
import ReactDOM from 'react-dom';
import './styles/bootstrap-reboot.css';
import './styles/style.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import thunk from 'redux-thunk';
import { createFirestoreInstance } from 'redux-firestore';
import JavascriptTimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import App from './components/app/App';
import reducer from './store/reducers';
import firebase from './services/firebase';

// Initialize the desired locales.
JavascriptTimeAgo.locale(en);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const firebaseProps = {
  firebase,
  config: {
    userProfile: 'users',
    useFirestoreForProfile: true,
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...firebaseProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
