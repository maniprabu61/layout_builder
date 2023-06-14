import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import layout from './features/layout';


const store = configureStore({
  reducer : {
    header : layout
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout Children={<App />} />
    </Provider>
  </React.StrictMode>
);

