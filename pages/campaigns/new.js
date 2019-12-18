import React,{Component} from 'react';
import Layout from '../../components/Layout';
import {Form,Button,Input,Message} from 'semantic-ui-react';
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'
import {Router} from '../../routes'

class NewCampaign extends Component{
    state={
        minimumContribution:'',
        title:'',
        description:'',
        errorMsg:"",
        loading: false
    }

    onSubmit= async (event)=>{
        event.preventDefault();
        this.setState({errorMsg:'',loading:true})
        const accounts=await web3.eth.getAccounts();
        try{
        await factory.methods.addCampaign(this.state.title,this.state.description,this.state.minimumContribution).send({
            from:accounts[0]
        })
        Router.pushRoute('/');
    }catch(err){this.setState({errorMsg:err.message})}
    this.setState({loading:false})
    }
    render(){
        
        return(
            <Layout>
            <h3>New Campaign</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMsg}>
                    <Form.Field>
                        <label>Title</label>
                        <Input value={this.state.title} onChange={event=>this.setState({title:event.target.value})}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <Input value={this.state.description} onChange={event=>this.setState({description:event.target.value})}/>
                        </Form.Field>
                        <Form.Field>
                        <label>Minimum contribution(in wei)</label>
                        <Input 
                        label="wei" 
                        labelPosition="right"
                        value={this.state.minimumContribution}
                        onChange={event=>this.setState({minimumContribution:event.target.value})}
                        />
                    </Form.Field>
                    <Message error header="Oops...something went wrong!" content={this.state.errorMsg} />
                    <Button primary loading={this.state.loading} type="submit">Create campaign!</Button>

                </Form>
                
            </Layout>
        )
    }
}

export default NewCampaign;