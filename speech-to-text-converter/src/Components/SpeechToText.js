import React, { useState } from 'react';
import './SpeechToText.css';

const SpeechToText = () => {
  const [transcript, setTranscript] = useState('');

  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition();

    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      setTranscript(speechToText);
    };

    recognition.start();
  };

  const copyTextForFurtherUse = () => {
    // Copy the text to the clipboard
    navigator.clipboard.writeText(transcript)
      .then(() => alert('Text copied successfully!'))
      .catch((error) => console.error('Unable to copy text:', error));
  };

  const restartListening = ()=> {
    window.location.reload()

  }

  return (
    <div className="speech-to-text-container">
      <h2>Speech to Text Converter</h2>
      <button onClick={startListening}>Start Listening</button> <span>  </span>
      <button onClick={restartListening}>Restart Listening</button>
      <div className='output-text'>
        <div className="transcript">{transcript}</div>
      </div>
      <button id='copybutton' onClick={copyTextForFurtherUse}>COPY</button>
    </div>
  );
};

export default SpeechToText;
