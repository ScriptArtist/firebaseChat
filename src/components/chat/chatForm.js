import React, { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

function ChatForm() {
  const firestore = useFirestore();
  const userId = useSelector((state) => state.firebase.auth.uid);
  const [messageText, setMessageText] = useState('');

  function submitForm() {
    const message = {
      from_id: `users/${userId}`,
      to_id: 'bots/39i73ih0YpFjUd3p6v9v',
      timestamp: firestore.FieldValue.serverTimestamp(),
      text: messageText,
    };

    return firestore.collection('messages').add(message);
  }


  function onMessageFormKeyPress(event) {
    if (event.charCode === 13 && !(event.shiftKey || event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      submitForm();
      setMessageText('');
    }
  }

  function handleMessageTextChange(event) {
    setMessageText(event.target.value);
  }

  return (
    <div className="chat-form">
      <form action="">
        <div className="textarea-wrap">
          <textarea placeholder="Text" value={messageText} onKeyPress={onMessageFormKeyPress} onChange={handleMessageTextChange.bind(this)} />
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
  );
}

export default ChatForm;
