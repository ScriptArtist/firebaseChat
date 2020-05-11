import React from 'react';
import { useFirebase } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import './chat.css';
import './chat-block.css';

function Chat() {
  const firebase = useFirebase();
  const auth = useSelector((state) => state.firebase.auth);

  function logout() {
    firebase.logout();
  }

  return (
    <div className="chat-wrap">
      <div className="contacts-wrap">
        <div className="contact">
          <input type="button" onClick={logout} value="Выход" />
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
      </div>
      {/* <!--className="chat-block blocked" for blocked chat--> */}
      <div className="chat-block">

        <div className="blocked-wrap">
          <div style={{ position: 'relative' }}>
            <div className="chat">

              <div className="chat-message">
                <div className="chat-message-foto">
                  <a href="/#" label="message-photo"><img src="" alt="" /></a>
                </div>
                <div className="chat-message-text">
                  My name is martin
                </div>
                <div className="chat-message-time">2 hours ago</div>
              </div>
              <div className="chat-message user-message">
                <div className="chat-message-foto">
                  <a href="/#" aria-label="contact user photo"><img src="" alt="" /></a>
                </div>
                <div className="chat-message-text">
                  You are so stupid...
                </div>
                <div className="chat-message-time">2 hours ago</div>
              </div>
              <div className="chat-message">
                <div className="chat-message-foto">
                  <a href="/#" aria-label="contact user photo"><img src="" alt="" /></a>
                </div>
                <div className="chat-message-text">
                  London is the capital of great britain.
                </div>
                <div className="chat-message-time">2 hours ago</div>
              </div>
              <div className="chat-message user-message">
                <div className="chat-message-foto">
                  <a href="/#" aria-label="contact user photo"><img src="" alt="" /></a>
                </div>
                <div className="chat-message-text">
                  Hello, bot
                </div>
                <div className="chat-message-time">2 hours ago</div>
              </div>
            </div>
          </div>
          <div className="chat-form">
            <form action="">
              <div className="textarea-wrap">
                <textarea placeholder="Text" />
              </div>
              <div className="textarea-count-wrap">
                <div className="checkbox-wrap">
                  <label htmlFor="enterToSend">
                    <input id="enterToSend" type="checkbox" />
                    <span />
                    Press Enter to send
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
