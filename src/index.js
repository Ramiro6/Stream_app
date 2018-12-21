import React from 'react';
import ReactDom from 'react-dom';
import App from './App.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index.jsx';

const store = createStore(reducers)

ReactDom.render(
  <Provider store={store}>
      <App />
  </Provider>, document.getElementById('root'))
