import React, { useEffect } from 'react';
import { useFirebase, isLoaded } from 'react-redux-firebase';
import './contacts.css';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveDialog } from '../../store/actions/chatActions';

function Contacts() {
  const firebase = useFirebase();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth);
  const bots = useSelector((state) => state.firestore.ordered.bots);
  const activeDialog = useSelector((state) => state.chat.activeDialog);

  useEffect(() => {
    // select first dialog on init
    if (isLoaded(bots) && !activeDialog) {
      dispatch(setActiveDialog(bots[0].id));
    }
  });

  function logout() {
    firebase.logout();
  }

  function onContactClick(id) {
    dispatch(setActiveDialog(id));
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
      {bots && bots.map((bot) => (
        <div type="button" focusable key={bot.id} className={`contact-user ${bot.id === activeDialog ? 'active' : ''}`} onClick={() => { onContactClick(bot.id); }}>
          <div className="contact-user-foto">
            <a href="/#" aria-label="contact user photo"><img src={bot.avatarUrl} alt="" /></a>
          </div>
          <div className="contact-user-info">
            <div className="contact-user-top">
              <a href="/#" className="contact-user-name">
                {bot.displayName}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Contacts;
