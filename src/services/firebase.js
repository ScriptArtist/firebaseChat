import * as firebase from 'firebase/app';
import 'firebase/auth';

/**
 * @description Firebase provides the tools and infrastructure to authenticate and manage users
 * store and query user data, and makes it available between users in realtime
 */

const firebaseConfig = {
  apiKey: 'AIzaSyC6TCipBfOKJqURF7ho-NEGvlgwFofqE0I',
  authDomain: 'reactchat-7805a.firebaseapp.com',
  databaseURL: 'https://reactchat-7805a.firebaseio.com',
  projectId: 'reactchat-7805a',
  storageBucket: 'reactchat-7805a.appspot.com',
  messagingSenderId: '300032889630',
  appId: '1:300032889630:web:5022f5d00f84132af16f0f',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
