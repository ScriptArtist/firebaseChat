import React from 'react';
import logo from './logo.svg';
import './chat.css';
import './chat-block.css';

function App() {
  return (
    <main className="main">
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="chat-wrap">
              <div className="contacts-wrap">
                <div className="contact">
                  <div className="contact-user">
                    <div className="contact-user-foto">
                      <a href="/#" aria-label="contact user photo"><img src="" alt="" /></a>
                    </div>
                    <div className="contact-user-info">
                      <div className="contact-user-top">
                        <a href="/#" className="contact-user-name">
                          john_snow
                        </a>
                      </div>

                    </div>
                  </div>
                  <div className="contact-user active">
                    <div className="contact-user-foto">
                      <a href="/#" aria-label="contact user photo"><img src="" alt="" /></a>
                    </div>
                    <div className="contact-user-info">
                      <div className="contact-user-top">
                        <a href="/#" className="contact-user-name">
                          martin
                        </a>
                      </div>

                    </div>
                  </div>
                  <div className="contact-user">
                    <div className="contact-user-foto">
                      <a href="/#" aria-label="contact user photo"><img src="" alt="" /></a>
                    </div>
                    <div className="contact-user-info">
                      <div className="contact-user-top">
                        <a href="/#" className="contact-user-name">
                          sherlock
                        </a>
                      </div>

                    </div>
                  </div>
                  <div className="contact-user">
                    <div className="contact-user-foto">
                      <a href="/#" aria-label="contact user photo"><img src="" alt="" /></a>
                    </div>
                    <div className="contact-user-info">
                      <div className="contact-user-top">
                        <a href="/#" className="contact-user-name">
                          monica
                        </a>
                      </div>

                    </div>
                  </div>

                  <div className="contact-user">
                    <div className="contact-user-foto">
                      <a href="/#" aria-label="contact user photo"><img src="" alt="" /></a>
                    </div>
                    <div className="contact-user-info">
                      <div className="contact-user-top">
                        <a href="/#" className="contact-user-name">
                          dallas
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
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
          </div>
          <div className="col-3" style={{ color: 'white' }}>
            <img src={logo} style={{ width: '100%', padding: '5px' }} alt="" />
            Тестовое задание на позицию:
            {' '}
            <br />
            <b style={{ float: 'right' }}>Frontend Developer</b>

          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
