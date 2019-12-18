import React,{Component} from 'react';
import {Form,Input,Message,Button} from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3'
import Web3 from 'web3';
import {Router} from '../routes'

class ContributeForm extends Component{
    state={
        value:'',
        loading:false,
        errorMsg:''
    }
    onSubmit=async (event)=>{
        event.preventDefault();
        const campaign=Campaign(this.props.address);
        this.setState({loading:true,errorMsg:''})
        try{
            const accounts=await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from:accounts[0],
                value:Web3.utils.toWei(this.state.value,'gwei')
            })
            Router.replaceRoute(`/campaigns/${this.props.address}`)
        }catch(err){
            this.setState({errorMsg:err.message})
        }
        this.setState({loading:false,value:''})
    }

    render(){
        return(
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMsg}>
                <Form.Field>
                    <label>Amount to contribute</label>
                    <Input
                    value={this.state.value}
                    onChange={event=>this.setState({value:event.target.value})}
                    label='gwei'
                    labelPosition='right'
                    />
                    </Form.Field>
                    <Message error header="Oops...something went wrong!" content={this.state.errorMsg} />
                    <Button primary loading={this.state.loading} type='submit'>Send funds</Button>
                
            </Form>
        )
    }
}
export default ContributeForm;