const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();

function generateMessage(fromMessage, botId) {
  let messages = {
    '39i73ih0YpFjUd3p6v9v': ['london is the capital of great britain', 'What do you think about this book?', 'Well, it is an interesting question', 'Well well well..'],
    'I2yDbsi6emND0UH5FO6Y': ['Ping', 'rm -rf .', '.... . .-.. .-.. ---'],
    'hqjbMuqAI7MjiGwL7Np7': ['Winter is coming', 'The lone wolf dies but the pack survives', 'Power resides where men believe it resides', 'Fear cuts deeper than swords', 'A mind needs books like a sword needs a whetstone'],
    'xLpRIracfYq1vM0UrMvJ': ['You have a grand gift for silence, Watson', 'Oh, hell!', 'You see, but you do not observe', ' It is a capital mistake to theorize before one has data', 'When you have eliminated the impossible, whatever remains, however improbable, must be the truth?”','Watson', 'Dear God...'],
    'xihhB917OMpwmsaaQxrx': ['Wow', 'Great! :)', 'Are you sure?!'],
  };

  if(messages[botId]) {
    let randomMessageId = Math.floor(Math.random() * messages[botId].length);
    return messages[botId][randomMessageId];
  } else {
    return 'Hello world!';
  }
}

exports.botResponse = functions.firestore.document('messages/{push_id}')
  .onCreate((snapshot, context) => {
    let data = snapshot.data();
    let [userType, botId] = data.to_id.split('/');

    if(userType === 'bots') {
      let response = {
        from_id: data.to_id,
        to_id: data.from_id,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
        text: generateMessage(data.text, botId),
        chat_id: data.chat_id,
      };

      return db.collection('messages').add(response);
    }
  });
