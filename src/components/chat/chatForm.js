import React, { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

function ChatForm() {
  const firestore = useFirestore();
  const userId = useSelector((state) => state.firebase.auth.uid);
  const activeDialog = useSelector((state) => state.chat.activeDialog);
  const [messageText, setMessageText] = useState('');
  const [enterToSend, setEnterToSend] = useState(true);

  function submitForm() {
    if (!activeDialog) return;
    if (!messageText.length) return;

    const message = {
      from_id: `users/${userId}`,
      to_id: `bots/${activeDialog}`,
      timestamp: firestore.FieldValue.serverTimestamp(),
      text: messageText,
      chat_id: `${userId}_${activeDialog}`,
    };
    firestore.collection('messages').add(message);
  }


  function onMessageFormKeyPress(event) {
    const isFunctionButtonsPressed = (event.shiftKey || event.metaKey || event.ctrlKey);
    const isEnterPressed = event.charCode === 13;

    if (isEnterPressed && (enterToSend !== isFunctionButtonsPressed)) {
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
            <input id="enterToSend" type="checkbox" checked={enterToSend} onChange={() => { setEnterToSend(!enterToSend); }} />
            <label htmlFor="enterToSend">
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
