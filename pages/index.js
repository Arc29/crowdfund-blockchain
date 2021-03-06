import React,{Component} from 'react';
import factory from '../ethereum/factory'
import {Card,Button} from 'semantic-ui-react'
import Layout from '../components/Layout'
import {Link} from '../routes'

class CampaignIndex extends Component{
    state={
        list:[]
    }
    async componentDidMount(){
        const list=await factory.methods.getCampaignList().call();

        this.setState({list})
    }

    renderCampaigns(){
        const items=this.state.list.map(address=>{
            return {
                header:address,
                description:<Link route={`/campaigns/${address}`}><a>View Campaign</a></Link>,
                fluid:true
            }
        })
    

    return <Card.Group items={items}/>

    }

    render(){
        return(
            <Layout>
            <div>
            
            <h3>Open campaigns</h3>
            <Link route='/campaigns/new'>
            <a>
            <Button
                content="Create campaign"
                icon="add"
                primary
                floated="right"
            />
            </a>
            </Link>
            
            {this.renderCampaigns()}
            
            </div>
            </Layout>
        )
    }
}

export default CampaignIndex;