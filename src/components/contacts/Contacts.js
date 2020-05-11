import React from 'react';
import { useFirebase } from 'react-redux-firebase';
import './contacts.css';
import { useSelector } from 'react-redux';

function Contacts() {
  const firebase = useFirebase();
  const auth = useSelector((state) => state.firebase.auth);

  function logout() {
    firebase.logout();
  }

  function Profile() {
    return (
      <div className="contact-user contact-user--profile">
        <div className="contact-user-foto">
          <a href="/#" aria-label="contact user photo"><img src={auth.photoURL} alt="" /></a>
        </div>
        <div className="contact-user-info">
          <div className="contact-user-top">
            <a href="/#" className="contact-user-name">
              { auth.displayName }
            </a>
          </div>
        </div>
        <input type="button" onClick={logout} value="Выход" />
      </div>
    );
  }

  return (
    <div className="contact">
      <Profile />
      <div className="contact-user">
        <div className="contact-user-foto">
          <a href="/#" aria-label="contact user photo"><img src="" alt="" /></a>
        </div>
        <div className="contact-user-info">
          <div className="contact-user-top">
            <a href="/#" className="contact-user-name">
              john_snow
            </a>
          </div>
        </div>
      </div>
      <div className="contact-user active">
        <div className="contact-user-foto">
          <a href="/#" aria-label="contact user photo"><img src="" alt="" /></a>
        </div>
        <div className="contact-user-info">
          <div className="contact-user-top">
            <a href="/#" className="contact-user-name">
              martin
            </a>
          </div>
        </div>
      </div>
      <div className="contact-user">
        <div className="contact-user-foto">
          <a href="/#" aria-label="contact user photo"><img src="" alt="" /></a>
        </div>
        <div className="contact-user-info">
          <div className="contact-user-top">
            <a href="/#" className="contact-user-name">
              sherlock
            </a>
          </div>
        </div>
      </div>
      <div className="contact-user">
        <div className="contact-user-foto">
          <a href="/#" aria-label="contact user photo"><img src="" alt="" /></a>
        </div>
        <div className="contact-user-info">
          <div className="contact-user-top">
            <a href="/#" className="contact-user-name">
              monica
            </a>
          </div>
        </div>
      </div>
      <div className="contact-user">
        <div className="contact-user-foto">
          <a href="/#" aria-label="contact user photo"><img src="" alt="" /></a>
        </div>
        <div className="contact-user-info">
          <div className="contact-user-top">
            <a href="/#" className="contact-user-name">
              dallas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
