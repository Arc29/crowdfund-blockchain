import web3 from './web3';
import factoryContract from './build/CampaignFactory.json';

const obj=new web3.eth.Contract(JSON.parse(factoryContract.interface),
    "0x9E97fbd4d1Fb77b187081f48eC196bEd10e9B95A"
)

export default obj;
