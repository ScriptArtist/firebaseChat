import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import ChatMessage from './ChatMessage';

function ChatMessages() {
  useFirestoreConnect([
    { collection: 'users' },
    { collection: 'bots' },
    { collection: 'messages', orderBy: ['timestamp', 'desc'] },
  ]);
  const messages = useSelector((state) => state.firestore.ordered.messages);

  return (
    <div className="chat">
      {messages && messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
}

export default ChatMessages;
