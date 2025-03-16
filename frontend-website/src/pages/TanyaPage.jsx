import React, { useState, useEffect } from 'react';
import { Mic, Send, AudioWaveform as Waveform } from 'lucide-react';

import "../assets/styles/tanyapage.css"

const TanyaPage = ({states}) => {
  const [activeInterface, setActiveInterface] = useState('none');
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [translatedText, setTranslatedText] = useState('');
  const [currentName, setCurrentName] = useState('Tanya');

  useEffect(() => {
    const names = ['Tanya', 'Tamizhi', 'Abhay'];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % names.length;
      setCurrentName(names[currentIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getInterfaceCaption = () => {
    switch(currentName) {
      case 'Tanya':
        return 'You are chatting with Tanya';
      case 'Tamizhi':
        return 'Tamizhi is here to help';
      case 'Abhay':
        return 'Start Abhay to Talk about Chennai';
      default:
        return '';
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
    
    setMessages([...messages, { text: inputMessage, sender: 'user' }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: `Thanks for your message! I'm ${currentName}, your AI travel assistant. How can I help you plan your trip today?`, 
        sender: 'tanya' 
      }]);
    }, 1000);
    
    setInputMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleMicrophone = () => {
    setIsListening(!isListening);
    
    if (!isListening) {
      setTimeout(() => {
        setTranslatedText("Hello, I would like to visit the famous temples in Tamil Nadu. Can you suggest some popular ones?");
        setIsListening(false);
      }, 3000);
    } else {
      setTranslatedText('');
    }
  };

  const renderInterface = () => {
    switch (activeInterface) {
      case 'chat':
        return (
          <div className="chat-container">
            <h2 className="text-center mb-4">{getInterfaceCaption()}</h2>
            <div className="chat-messages p-3">
              {messages.length === 0 ? (
                <div className="text-center text-muted mt-4">
                  <p className="mb-2">Start a conversation with {currentName}!</p>
                  <p className="small">Ask about travel destinations, recommendations, or planning assistance.</p>
                </div>
              ) : (
                messages.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`message ${msg.sender === 'user' ? 'user' : ''}`}
                  >
                    <div className={`p-3 rounded ${
                      msg.sender === 'user' 
                        ? 'bg-primary text-white' 
                        : 'bg-light'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))
              )}
            </div>
            
            <div className="p-3 bg-white">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button 
                  className="btn btn-primary"
                  onClick={handleSendMessage}
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        );
        
      case 'translator':
        return (
          <div className="translator-container">
            <h2 className="text-center mb-4">{getInterfaceCaption()}</h2>
            <div className="d-flex flex-column align-items-center justify-content-center h-100">
              <button 
                className={`mic-button btn btn-lg rounded-circle mb-4 d-flex align-items-center justify-content-center ${
                  isListening ? 'active btn-danger' : 'btn-primary'
                }`}
                onClick={toggleMicrophone}
              >
                <Mic size={32} />
              </button>
              
              {isListening ? (
                <p className="h5 mb-2">Listening...</p>
              ) : (
                <p className="h5 mb-2">Tap the microphone to speak</p>
              )}
              
              {translatedText && (
                <div className="bg-light p-3 rounded w-100">
                  <p className="text-muted small mb-2">Translation:</p>
                  <p className="mb-0">{translatedText}</p>
                </div>
              )}
            </div>
          </div>
        );

      case 'commentary':
        return (
          <div className="commentary-container">
            <h2 className="text-center mb-4">{getInterfaceCaption()}</h2>
            <div className="text-center">
              <p>Coming soon! Live audio commentary feature.</p>
            </div>
          </div>
        );
        
      default:
        return (
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div 
                className="card h-100 feature-card cursor-pointer"
                onClick={() => setActiveInterface('chat')}
              >
                <div className="card-body text-center d-flex flex-column">
                  <h3 className="h4 mb-auto">Talk with {currentName}</h3>
                  <div className="mt-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ask me anything..."
                        disabled
                      />
                      <button className="btn btn-primary">
                        <Send size={18} />
                      </button>
                    </div>
                    <small className="text-muted mt-2">Click to chat</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div 
                className="card h-100 feature-card cursor-pointer"
                onClick={() => setActiveInterface('translator')}
              >
                <div className="card-body text-center d-flex flex-column">
                  <h3 className="h4 mb-auto">Voice Translator</h3>
                  <div className="mt-3">
                    <Mic size={48} className="text-primary mb-2" />
                    <small className="text-muted d-block">Click to translate</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div 
                className="card h-100 feature-card cursor-pointer"
                onClick={() => setActiveInterface('commentary')}
              >
                <div className="card-body text-center d-flex flex-column">
                  <h3 className="h4 mb-auto">Live Commentary</h3>
                  <div className="mt-3">
                    <Waveform size={48} className="text-primary mb-2" />
                    <small className="text-muted d-block">Click to start</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="container w-100">
      <section className="mb-4 text-center">
        <h1 className="h2 mb-2">
          Don't worry, <span className="assistant-name">{currentName}</span> is here to help!
        </h1>
        <p className="text-muted">Get personalized travel recommendations, translate languages, and plan your perfect trip.</p>
      </section>
      
      {activeInterface !== 'none' && (
        <button 
          className="btn btn-link text-decoration-none mb-4"
          onClick={() => setActiveInterface('none')}
        >
          <span className="me-1">←</span> Back to options
        </button>
      )}
      
      {renderInterface()}
    </div>
  );
};

export default TanyaPage;