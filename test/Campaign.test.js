const assert=require('assert');
const ganache=require('ganache-cli');
const Web3=require('web3');
const web3=new Web3(ganache.provider());

const campaignContract=require('../ethereum/build/Campaign.json');
const factoryContract=require('../ethereum/build/CampaignFactory.json');

let accounts,factory,campaignAddress,campaign;

beforeEach(async ()=>{
    accounts=await web3.eth.getAccounts();

    factory=await new web3.eth.Contract(JSON.parse(factoryContract.interface))
    .deploy({data:factoryContract.bytecode})
    .send({from:accounts[0],gas:'1000000'})

    await factory.methods.addCampaign('100').send({
        from:accounts[0],
        gas:'1000000'
    })
    const campaignList = await factory.methods.getCampaignList().call();
    campaignAddress=campaignList[0]
    campaign=await new web3.eth.Contract(
        JSON.parse(campaignContract.interface)
        ,campaignAddress
    )

})

describe('Campaign test',()=>{
    it('deploys factory and campaign',()=>{
        assert.ok(factory.options.address)
        assert.ok(campaign.options.address)
    })

    it('makes correct manager',async ()=>{
        const manager=await campaign.methods.manager().call();
        assert.equal(manager,accounts[0])
    })

    it('allows correct contribution and adds to sender contribution',async ()=>{
        await campaign.methods.contribute().send({
            value:'200',
            from:accounts[1]
        })
        const contribution=await campaign.methods.contributors(accounts[1]).call();
        console.log(contribution)
        assert.ok(contribution>0);
    })
})
