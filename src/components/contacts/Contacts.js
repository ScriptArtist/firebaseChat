import React from 'react';
import { useFirebase } from 'react-redux-firebase';
import './contacts.css';
import { useSelector } from 'react-redux';

function Contacts() {
  const firebase = useFirebase();
  const auth = useSelector((state) => state.firebase.auth);
  const bots = useSelector((state) => state.firestore.data.bots);

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
        <input type="button" onClick={logout} value="Logout" />
      </div>
    );
  }

  return (
    <div className="contact">
      <Profile />
      {bots
      && Object.keys(bots).map((id) => (
        <div key={id} className="contact-user">
          <div className="contact-user-foto">
            <a href="/#" aria-label="contact user photo"><img src={bots[id].avatarUrl} alt="" /></a>
          </div>
          <div className="contact-user-info">
            <div className="contact-user-top">
              <a href="/#" className="contact-user-name">
                {bots[id].displayName}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Contacts;
