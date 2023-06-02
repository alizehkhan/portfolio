import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactModal from 'react-modal';
import { Provider } from 'react-redux';

import App from './App.tsx';
import store from './store';

ReactModal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
