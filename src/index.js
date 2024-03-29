
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { store, persistor } from './store/store';
import { PersistGate }  from 'redux-persist/integration/react';
import './index.scss';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <Provider store={store}>
     <PersistGate persistor={persistor}>
      <BrowserRouter>
       <Elements stripe={stripePromise}>
        <App />
        </Elements>
       </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
