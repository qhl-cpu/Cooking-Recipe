import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { store } from './reducers/store';
//import ReactDOM from 'react-dom/client';
// import rootReducer from './reducers';
// import { configureStore } from '@reduxjs/toolkit';
// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false
// })

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//     serializableCheck: false
//   }),
// });

// const root = ReactDOM.createRoot(document.getElementById('root'));
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
//StrictMode is a dev tool used for highlighting problematic code in React
