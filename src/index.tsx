import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux'

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

// create store redux
import store from './store/store'

render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
