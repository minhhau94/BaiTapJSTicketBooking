import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// thiết lập store redux
import {createStore, combineReducers} from "redux";
// redux cung cấp hàm thiết lập store
import { Provider } from 'react-redux';
// Ex5
import { chairReducer } from './Ex5/redux/chairReducer';



const rootReducer = combineReducers ({
  // Ex5
  chair: chairReducer,
});

// coppy window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() dán vào làm tham số thứ 2 của store để hoạt động
const store = createStore (rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider> 
  </React.StrictMode>    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();