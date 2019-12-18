import React,{Component} from 'react'
import Layout from '../../../components/Layout'
import {Button,Table} from 'semantic-ui-react'
import {Link} from '../../../routes'
import Campaign from '../../../ethereum/campaign'
import RequestRow from '../../../components/RequestRow'
import web3 from '../../../ethereum/web3'

class RequestIndex extends Component{
    static async getInitialProps(props){
        const {address}=props.query
        const campaign=Campaign(address)
        const reqCount=await campaign.methods.getRequestCount().call();
        const manager=await campaign.methods.manager().call()
        const accounts=await web3.eth.getAccounts()
        const contribution=await campaign.methods.contributors(accounts[0]).call()
        const contributorCount=await campaign.methods.contributorCount().call();
        const requests=await Promise.all(Array(parseInt(reqCount))
                        .fill()
                        .map((ele,index)=>{
                            return campaign.methods.requests(index).call()
                        })
        )
        return {address,reqCount,requests,contributorCount,manager,contribution,accounts}
    }

    renderRows(){
        return(this.props.requests.map((request,index)=>{
            return(
                <RequestRow
                key={index}
                id={index}
                request={request}
                address={this.props.address}
                contributorCount={this.props.contributorCount}
                manager={this.props.manager}
                contribution={this.props.contribution}
                account={this.props.accounts[0]}
                />
            )
        }))
    }
    render(){
        const {Header,Row,HeaderCell,Body} = Table
        return(
            <Layout>
                <h3>
                Requests Index
            </h3>
            <Link route={`/campaigns/${this.props.address}/requests/new`}>
                <a>
                <Button primary>Create Request</Button>
                </a>
            </Link>
            <Table>
                <HeaderCell>ID</HeaderCell>
                <HeaderCell>Description</HeaderCell>
                <HeaderCell>Amount(in gwei)</HeaderCell>
                <HeaderCell>Recipient</HeaderCell>
                <HeaderCell>Approval Count</HeaderCell>
                <HeaderCell>Approve</HeaderCell>
                <HeaderCell>Finalize</HeaderCell>
                <HeaderCell>Status</HeaderCell>
                <Body>
                    {this.renderRows()}
                </Body>
            </Table>
            </Layout>
            
        )
    }
}

export default RequestIndex