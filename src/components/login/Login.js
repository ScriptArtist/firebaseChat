import React from 'react';
import { useFirebase } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';
import './login.css';

function Login() {
  const firebase = useFirebase();
  const history = useHistory();

  function loginWithGoogle() {
    firebase.login({ provider: 'google', type: 'popup' }).then(() => {
      history.push('/');
    });
  }

  return (
    <main className="main">
      <div className="container">
        <div className="login">
          <div className="login__title">Добро пожаловать в chatBot</div>
          <button type="button" className="account-button" onClick={loginWithGoogle}>
            <div className="account-button__icon" />
            Войти через Google
          </button>
        </div>
      </div>
    </main>
  );
}

export default Login;
