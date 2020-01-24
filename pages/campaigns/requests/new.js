import React,{Component} from 'react';
import Layout from '../../../components/Layout';
import {Form,Button,Input,Message} from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign'
import web3 from '../../../ethereum/web3'
import {Router,Link} from '../../../routes'

class NewRequest extends Component{
    static async getInitialProps(props){
        return {address:props.query.address}
    }
    state={
        value:'',
        recipient:'',
        description:'',
        errorMsg:"",
        loading: false
    }
    
    onSubmit= async (event)=>{
        event.preventDefault();
        this.setState({errorMsg:'',loading:true})
        const campaign=Campaign(this.props.address)
        try{
        const accounts=await web3.eth.getAccounts();
        
        await campaign.methods.createRequest(this.state.description,web3.utils.toWei(this.state.value,'gwei'),this.state.recipient).send({
            from:accounts[0]
        })
        Router.replaceRoute(`/campaigns/${this.props.address}/requests`)
    }catch(err){this.setState({errorMsg:err.message})}
    this.setState({loading:false})
    }
    render(){
        
        return(
            <Layout>
            <Link route={`/campaigns/${this.props.address}/requests`}>
                Back
            </Link>
            <h3>Create new request</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMsg}>
                    
                    <Form.Field>
                        <label>Description</label>
                        <Input value={this.state.description} onChange={event=>this.setState({description:event.target.value})}/>
                        </Form.Field>
                        <Form.Field>
                        <label>Value(in gwei)</label>
                        <Input 
                        label="gwei" 
                        labelPosition="right"
                        value={this.state.value}
                        onChange={event=>this.setState({value:event.target.value})}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Recipient</label>
                        <Input value={this.state.recipient} onChange={event=>this.setState({recipient:event.target.value})}/>
                    </Form.Field>
                    <Message error header="Oops...something went wrong!" content={this.state.errorMsg} />
                    <Button primary loading={this.state.loading} type="submit">Create request!</Button>

                </Form>
                
            </Layout>
        )
    }
}

export default NewRequest;