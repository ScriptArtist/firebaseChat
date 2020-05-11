import React from 'react';
import { useSelector } from 'react-redux';
import './chat.css';
import './chat-block.css';
import Contacts from '../contacts/Contacts';

function Chat() {
  const auth = useSelector((state) => state.firebase.auth);

  return (
    <div className="chat-wrap">
      <div className="contacts-wrap">
        <Contacts />
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
