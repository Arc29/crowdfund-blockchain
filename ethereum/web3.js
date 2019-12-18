import Web3 from 'web3';

let web3;
if(typeof window!=='undefined' && typeof window.web3!=='undefined'){
    window.addEventListener('load', async () => {
        // Modern dapp browsers...
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            try {
                // Request account access if needed
                await window.ethereum.enable();
                // Acccounts now exposed
                
            } catch (error) {
                console.log("Permission denied!")
                
            }
        }
        
    });
web3=new Web3(window.web3.currentProvider);
}
else{
    const provider=new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/018bc3a3f55044b193e470ac1744fb0a');
    web3=new Web3(provider)
}

export default web3;