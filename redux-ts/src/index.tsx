import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store, { persiStore } from './state/store';
import App from './components/app';
import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import './css/tailwind/index.css';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>loading</div>} persistor={persiStore}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
