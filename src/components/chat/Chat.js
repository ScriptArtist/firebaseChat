import React from 'react';
import './chat.css';
import './chat-block.css';
import Contacts from '../contacts/Contacts';
import ChatMessages from './ChatMessages';
import ChatForm from './chatForm';

function Chat() {
  return (
    <div className="chat-wrap">
      <div className="contacts-wrap">
        <Contacts />
      </div>
      {/* <!--className="chat-block blocked" for blocked chat--> */}
      <div className="chat-block">
        <div className="blocked-wrap">
          <ChatMessages />
          <ChatForm />
        </div>
      </div>
    </div>
  );
}

export default Chat;
