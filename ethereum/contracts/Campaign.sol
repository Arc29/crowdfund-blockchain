pragma solidity ^0.4.17;

contract CampaignFactory{
    address[] public campaigns;
    function addCampaign(string title,string description,uint minContri) public{
        address newAddress=new Campaign(title,description,minContri,msg.sender);
        campaigns.push(newAddress);
    }
    function getCampaignList() public view returns(address[]){
        return campaigns;
    }
}

contract Campaign{
    struct Request{
        uint value;
        string description;
        address recipient;
        bool completed;
        mapping(address=>bool) approvals;
        uint approvalCount;
    }
    string public title;
    string public description;
    address public manager;
    uint public minimumContri;
    uint public contributorCount;
    uint public totalContributions;
    mapping(address=>uint) public contributors;
    Request[] public requests;
    modifier restricted(){
        require(msg.sender==manager);
        _;
    }
    function Campaign(string titl,string des,uint minContri,address owner) public{
        title=titl;
        description=des;
        minimumContri=minContri;
        manager=owner;
    }
    function contribute() public payable{
        require(msg.value>=minimumContri);
        if(contributors[msg.sender]==0){
            contributors[msg.sender]=msg.value;
            contributorCount++;
        }
        else
        contributors[msg.sender]+=msg.value;
        totalContributions+=msg.value;
    }
    function getContribution() public view returns(uint){
        return contributors[msg.sender];
    }
    function createRequest(string description,uint value,address recipient) public restricted{
        Request memory newRequest=Request({
            description:description,
            value:value,
            recipient:recipient,
            approvalCount:0,
            completed:false
        });
        
        requests.push(newRequest);
    }
    function approveRequest(uint index) public{
        
        require(!requests[index].completed);
        require(!requests[index].approvals[msg.sender]);
        require(contributors[msg.sender]>0);
        requests[index].approvals[msg.sender]=true;
        requests[index].approvalCount++;
    }
    function finalizeRequest(uint index) public restricted{
        
        require(!requests[index].completed);
        require(totalContributions>=requests[index].value);
        require(requests[index].approvalCount>(contributorCount/2));
        requests[index].recipient.transfer(requests[index].value);
        requests[index].completed=true;
    }

    function getDescription() public view returns(string,string,address){
        return(
            title,
            description,
            manager
        );
    }
    function getSummary() public view returns(string,string,uint,uint,uint,uint,uint,address){
        return(
            title,
            description,
            minimumContri,
            contributorCount,
            totalContributions,
            this.balance,
            requests.length,
            manager
        );
    }
    function getRequestCount() public view returns(uint){
        return requests.length;
    }
}