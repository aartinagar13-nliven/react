import React, { useState } from 'react';
import { ethers } from 'ethers';
import DCVSContract from '../artifacts/DCVS.json'; // Adjust path as necessary
const Enquiry = () => {
    const [name, setName] = useState('');
    const [docName, setDocName] = useState('');
    const [uniqueId, setUniqueId] = useState('');
    const [result, setResult] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Logic to fetch data from blockchain
        setResult('Fetched Data'); // Replace with actual fetched data
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Candidate Name" onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Document Name" onChange={(e) => setDocName(e.target.value)} required />
            <input type="text" placeholder="Document Unique ID" onChange={(e) => setUniqueId(e.target.value)} required />
            <button type="submit">Submit</button>
            {result && <p>Result: {result}</p>}
        </form>
    );
};
export default Enquiry;