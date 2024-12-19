// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract DCVS {
    struct Credential {
        string candidateName;
        string documentName;
        string startDate;
        string completionDate;
        string uniqueId;
        address owner;
    }
    mapping(string => Credential) public credentials;
    function register(string memory candidateName, string memory documentName, string memory startDate, string memory completionDate, string memory _uniqueId) public {
        credentials[_uniqueId] = Credential(_candidateName, documentName, startDate, completionDate, uniqueId, msg.sender);
    }
    function getDetails(string memory _uniqueId) public view returns (Credential memory) {
        return credentials[_uniqueId];
    }
}