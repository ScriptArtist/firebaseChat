import React from 'react';
import ReactDOM from 'react-dom';
import './styles/bootstrap-reboot.css';
import './styles/style.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import thunk from 'redux-thunk';
import App from './components/app/App';
import reducer from './store';
import firebase from './services/firebase';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const firebaseProps = {
  firebase,
  config: {
    userProfile: 'users',
  },
  dispatch: store.dispatch,
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
