import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux-store/store/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <Router>
        <App />
      </Router> 
    </Provider>
  </React.StrictMode>
);

