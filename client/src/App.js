import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SelfRegistration from './components/SelfRegistration';
import Enquiry from './components/Enquiry';
import DCVSContract from './artifacts/DCVS.json';
const App = ({ provider }) => {
    const contractAddress = '0x627306090abab3a6e1400e9345bc60c78a8bef57'; // Replace with your deployed contract address
    const contract = new ethers.Contract(contractAddress, DCVSContract.abi, provider.getSigner());
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/self-registration" render={() => <SelfRegistration contract={contract} />} />
                <Route path="/enquiry" render={() => <Enquiry contract={contract} />} />
            </Switch>
        </Router>
    );
};
export default App;
