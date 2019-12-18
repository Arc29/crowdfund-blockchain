import React,{Component} from 'react'
import {Table,Button} from 'semantic-ui-react'
import Web3 from 'web3'
import web3 from '../ethereum/web3'
import Campaign from '../ethereum/campaign'
import {Router} from '../routes'
class RequestRow extends Component{
    state={
        approveLoading:false,
        finalizeLoading:false,
        errorMsg:''
    }
    onApprove=async (event)=>{
        const campaign=Campaign(this.props.address)
        this.setState({approveLoading:true,errorMsg:''})
        try{
        const accounts=await web3.eth.getAccounts()
        await campaign.methods.approveRequest(this.props.id).send({
            from:accounts[0]
        })
        Router.replaceRoute(`/campaigns/${this.props.address}/requests`)
    }catch(err){this.setState({errorMsg:err.message})}
    this.setState({approveLoading:false})
    }
    onFinalize=async (event)=>{
        const campaign=Campaign(this.props.address)
        this.setState({finalizeLoading:true,errorMsg:''})
        try{
        const accounts=await web3.eth.getAccounts()
        if(accounts[0]!==this.props.manager)
        throw new Error('Only manager can finalize')
        await campaign.methods.finalizeRequest(this.props.id).send({
            from:accounts[0]
        })
        Router.replaceRoute(`/campaigns/${this.props.address}/requests`)
    }catch(err){this.setState({errorMsg:err.message})}
    this.setState({finalizeLoading:false})
    }
    render(){
        const {Row,Cell}=Table
        const {id,request,contributorCount}=this.props
        const canBeFinaized=request.approvalCount > contributorCount / 2;
        
        return(
            <Row disabled={request.completed} positive={canBeFinaized && !request.completed}>
                <Cell>
                    {id+1}
                </Cell>
                <Cell>{request.description}</Cell>
                <Cell>{Web3.utils.fromWei(request.value,'gwei')}</Cell>
                <Cell>{request.recipient}</Cell>
                <Cell>{`${request.approvalCount}/${contributorCount}`}</Cell>
                <Cell>
                <Button color='green' basic disabled={(request.completed || parseInt(this.props.contribution)===0)} onClick={this.onApprove} loading={this.state.approveLoading}>
                    Approve
                </Button>
                </Cell>
                <Cell>
                <Button color='teal' basic disabled={request.completed || !canBeFinaized } onClick={this.onFinalize} loading={this.state.finalizeLoading}>
                    Finalize
                </Button>
                </Cell>
                {
                    this.state.errorMsg
                    ?<Cell negative>{this.state.errorMsg}</Cell>
                    :(
                        request.completed
                        ?<Cell>Completed</Cell>
                        :<Cell>Pending</Cell>
                    )
                }
            </Row>
            
        )
    }
}

export default RequestRow