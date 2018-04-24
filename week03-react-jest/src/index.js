import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Address from './components/Address'
import registerServiceWorker from './registerServiceWorker';
import addresses from './address-list'

ReactDOM.render(
    <div>
        <App />
        <Address addressList={addresses}/>

    </div>,
    document.getElementById('root')
);

registerServiceWorker();
