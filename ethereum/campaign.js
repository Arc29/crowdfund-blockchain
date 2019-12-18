import web3 from './web3';
import campaignContract from './build/Campaign.json';

export default (address)=>{ return new web3.eth.Contract(JSON.parse(campaignContract.interface),
    address)
}



