import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ReactTimeAgo from 'react-time-ago/modules/ReactTimeAgo';

function ChatMessage({ message }) {
  const data = useSelector((state) => state.firestore.data);
  const userId = useSelector((state) => state.firebase.auth.uid);
  const isUserMessage = userId === message.from_id.id;

  function getUser(path) {
    const userPath = path.split('/');
    return data[userPath[0]][userPath[1]];
  }

  return (
    <div className={`chat-message ${isUserMessage ? 'user-message' : ''}`}>
      <div className="chat-message-foto">
        <a href="/#" label="message-photo">
          <img src={getUser(message.from_id.path).avatarUrl} alt="" />
        </a>
      </div>
      <div className="chat-message-text">
        { message.text }
      </div>
      <div className="chat-message-time">
        <ReactTimeAgo date={message.timestamp.seconds * 1000} />
      </div>
    </div>
  );
}

ChatMessage.propTypes = {
  message: PropTypes.object.isRequired,
};

export default ChatMessage;
