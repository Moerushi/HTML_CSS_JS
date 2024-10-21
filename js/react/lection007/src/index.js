import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// npm install redux-persist
import { PersistGate } from 'redux-persist/integration/react';
import rootReducer from './rootReducer'
// npm install redux-thunk
import thunk from 'redux-thunk'
// npm install redux-saga
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import asyncMiddlewareEx3 from './asyncMiddlewareEx3'
import './index.css';
import App from './App';
import dataReducer from './dataReducer'
import reportWebVitals from './reportWebVitals';

// пример 1
// промежуточное ПО для демонстрации доп эффектов
const middleware = store => next => action => {
  console.log('Add effect');

  setTimeout(() => {
    console.log('time-outs, api etc');
  }, 1000);

  return next(action);
}

// пример 2
// logger dispatching, который выводит действия, отправленные в store
const loggerMiddleware = store => next => action => {
  console.log('dispatching ', action);
  return next(action);
}

// ex saga
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    ...rootReducer,
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware, loggerMiddleware, asyncMiddlewareEx3, thunk, sagaMiddleware)
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
