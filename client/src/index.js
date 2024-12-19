import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ethers } from 'ethers';
const provider = new ethers.providers.Web3Provider(window.ethereum);
window.ethereum.request({ method: 'eth_requestAccounts' });
ReactDOM.render(
    <React.StrictMode>
        <App provider={provider} />
    </React.StrictMode>,
    document.getElementById('root')
);