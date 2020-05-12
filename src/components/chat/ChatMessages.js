import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import ChatMessage from './ChatMessage';

function ChatMessages() {
  useFirestoreConnect([
    { collection: 'users' },
    { collection: 'bots' },
    { collection: 'messages' },
  ]);
  const messages = useSelector((state) => state.firestore.data.messages);

  return (
    <div className="chat">
      {messages
      && Object.keys(messages).map((id) => (
        <ChatMessage key={id} message={messages[id]} />
      ))}
    </div>
  );
}

export default ChatMessages;
