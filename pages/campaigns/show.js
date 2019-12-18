import React,{Component} from 'react';
import Layout from '../../components/Layout'
import Campaign from '../../ethereum/campaign'
import {Card,Grid, Button} from 'semantic-ui-react'
import Web3 from 'web3'
import ContributeForm from '../../components/ContributeForm'
import {Link} from '../../routes'

class ShowDetails extends Component{
    static async getInitialProps(props){
        const campaign=Campaign(props.query.address);
        const details=await campaign.methods.getSummary().call();

        return {
            address:props.query.address,
            title:details[0],
            description:details[1],
            minimumContribution:details[2],
            contributorCount:details[3],
            totalContributions:details[4],
            balance:details[5],
            requestCount:details[6],
            manager:details[7]            

        }
    }
    renderCards(){
        const {
            minimumContribution,
            contributorCount,
            totalContributions,
            balance,
            requestCount,
            manager
        } = this.props
        const list=[
            {
                header:manager,
                meta:'Address of manager',
                description:'Creator of this campaign',
                style:{overflowWrap:'break-word'}
            },
            {
                header:Web3.utils.fromWei(minimumContribution,'gwei'),
                meta:'gwei',
                description:'Minimum amount accepted by creator to be considered a contributor',
                style:{overflowWrap:'break-word'}
            },
            {
                header:contributorCount,
                meta:'Number of contributors',
                description:'Currently registered contributors',
                style:{overflowWrap:'break-word'}
            },
            {
                header:Web3.utils.fromWei(totalContributions,'gwei'),
                meta:'gwei',
                description:'Total contributions by contributors',
                style:{overflowWrap:'break-word'}
            },
            {
                header:Web3.utils.fromWei(balance,'gwei') ,
                meta:'gwei',
                description:'Currently available balance in campaign',
                style:{overflowWrap:'break-word'}
            },
            {
                header:requestCount,
                meta:'Request count',
                description:'Number of requests made by creator',
                style:{overflowWrap:'break-word'}
            },
        ]
        return <Card.Group items={list}/>
    }

    render(){
        return(<Layout>
        <h3>
            Campaign Details
            
        </h3>
        <Card header={this.props.title} description={this.props.description} fluid={true}/>
        <Grid>
        <Grid.Row>
            <Grid.Column width={12}>
            {this.renderCards()}
            
            </Grid.Column>
            <Grid.Column width={4}>
            <ContributeForm address={this.props.address}/>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                    <Button primary>
                        View Requests
                    </Button>
                </a>
            </Link>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        
        
        </Layout>)
    }
}

export default ShowDetails