import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { SpeechProvider } from '@speechly/react-client'

ReactDOM.render(
  <SpeechProvider appId="47fd0b2e-5a38-4350-8f75-62759ac1a4cd" language="en-US">
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </SpeechProvider>,

  document.getElementById('root')
);
