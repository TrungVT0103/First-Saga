import { CssBaseline } from '@mui/material';
import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { history } from './utils';
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* thay BrowserRouter thành ConnectedRouter */}
      {/* <ConnectedRouter history={history}>
        <CssBaseline />
        <App />
      </ConnectedRouter> */}
        {/* giúp reset lại css để css đồng bộ giữa tất cả các trình duyệt */}
      <BrowserRouter>
      <CssBaseline />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
