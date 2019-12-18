const HDWalletProvider=require('truffle-hdwallet-provider');
const Web3=require('web3');
const factoryContract=require('./build/CampaignFactory.json');
const fs=require('fs');

const provider=new HDWalletProvider('cash hair toddler exist clown isolate cake knock any tuition farm era',
'https://ropsten.infura.io/v3/018bc3a3f55044b193e470ac1744fb0a');

const web3=new Web3(provider);

const deploy= async ()=>{
    const accounts=await web3.eth.getAccounts();
    console.log('Deploying from ',accounts[0])
    
    const result=await new web3.eth.Contract(JSON.parse(factoryContract.interface))
    .deploy({data:factoryContract.bytecode})
    .send({from:accounts[0], gas: '2000000'});

    console.log("Deployed to ",result.options.address);

    const deployInfo= {
        address: result.options.address,
    }

    fs.writeFileSync('deployInfo.json',JSON.stringify(deployInfo))

}

deploy();