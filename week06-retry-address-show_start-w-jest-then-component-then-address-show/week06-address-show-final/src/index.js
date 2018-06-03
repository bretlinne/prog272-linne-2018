import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Address from './components/Address';
import Header from './components/Header';
import addresses from './address-list';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <Header />
        <App />
        <Address addressList={addresses} />
    </div>,
    document.getElementById('root')
);

