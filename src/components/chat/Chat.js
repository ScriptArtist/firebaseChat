import React from 'react';
import './chat.css';
import './chat-block.css';
import Contacts from '../contacts/Contacts';
import ChatMessages from './ChatMessages';

function Chat() {
  return (
    <div className="chat-wrap">
      <div className="contacts-wrap">
        <Contacts />
      </div>
      {/* <!--className="chat-block blocked" for blocked chat--> */}
      <div className="chat-block">
        <div className="blocked-wrap">
          <div style={{ position: 'relative' }}>
            <ChatMessages />
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
