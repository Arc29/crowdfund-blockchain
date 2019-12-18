import web3 from './web3';
import factoryContract from './build/CampaignFactory.json';

const obj=new web3.eth.Contract(JSON.parse(factoryContract.interface),
    "0x49f72b482a61f546d2babc79fa02dC36e5B50FA5"
)

export default obj;
