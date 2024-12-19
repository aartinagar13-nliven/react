import React, { useState } from 'react';
import { ethers } from 'ethers';
import DCVSContract from '../artifacts/DCVS.json'; // Adjust path as necessary
const SelfRegistration = () => {
    const [name, setName] = useState('');
    const [docName, setDocName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [completionDate, setCompletionDate] = useState('');
    const [file, setFile] = useState(null);
    const [uniqueId, setUniqueId] = useState('');
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile.size < 5  1024  1024 || selectedFile.type !== 'application/pdf') {
            alert('File must be at least 5 MB and in PDF format.');
            return;
        }
        setFile(selectedFile);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Logic to upload to blockchain
        setUniqueId('GeneratedUniqueID'); // Replace with actual unique ID from blockchain
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Candidate Name" onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Document Name" onChange={(e) => setDocName(e.target.value)} required />
            <input type="date" onChange={(e) => setStartDate(e.target.value)} required />
            <input type="date" onChange={(e) => setCompletionDate(e.target.value)} required />
            <input type="file" onChange={handleFileChange} required />
            <button type="submit">Submit</button>
            {uniqueId && <p>Your Unique ID: {uniqueId}</p>}
        </form>
    );
};
export default SelfRegistration;