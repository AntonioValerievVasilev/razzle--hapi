import 'fastestsmallesttextencoderdecoder';
import 'core-js'; // <- at the top of your entry point
import 'react-app-polyfill/ie11'; // For IE 11 support
import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
