import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import ChatMessage from './ChatMessage';

function ChatMessages() {
  const userId = useSelector((state) => state.firebase.auth.uid);
  const messages = useSelector((state) => state.firestore.ordered.messages);
  const activeDialog = useSelector((state) => state.chat.activeDialog);

  useFirestoreConnect([
    { collection: 'users' },
    { collection: 'bots' },
    {
      collection: 'messages',
      orderBy: ['timestamp', 'desc'],
      where: [
        ['chat_id', '==', `${userId}_${activeDialog}`],
      ],
    },
  ]);

  return (
    <div className="chat">
      {messages && messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
}

export default ChatMessages;
