import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid, Button, Icon, Segment, Header, Divider } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        //console.log(summary);
        return {
            address: props.query.address, 
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    } 
    renderCards() {
    const {
        balance,
        manager,
        minimumContribution,
        requestsCount,
        approversCount
    } = this.props;

    const items = [
        {
            image: 'https://bit.ly/2Uf6Ckr',
            header: manager,
            meta: "Manager Address",
            description: "The manager created this campaign and inside this there are several transaction requests",
            style: {overflowWrap: 'break-word', backgroundColor: 'rgba(175, 210, 117, 1)'}
        },
        {   
            image: 'https://bit.ly/2UriRtY ',
            header: minimumContribution,
            meta: 'Minimum Contributuion (wei)',
            description: "This ammount of is to be contributed to vote for the transactions",
            style: {overflowWrap: 'break-word', backgroundColor: 'rgba(175, 210, 117, 1'}
        },
        {
            image: 'https://bit.ly/3rf4Pry',
            header: requestsCount,
            meta: 'Number of Requests',
            description: "This is the money that is to be used from the contract. Requests must be approved by approvers",
            style: {overflowWrap: 'break-word', backgroundColor: 'rgba(175, 210, 117, 1'}
        },
        {
            image: 'https://bit.ly/3hKkZpJ',
            header: approversCount,
            meta: 'Eligible Voters',
            description: "Contributers are eligible to vote for managers requests",
            style: {overflowWrap: 'break-word', backgroundColor: 'rgba(175, 210, 117, 1'}
        },
        {   
            image: 'https://bit.ly/3xPP3pp',
            header: web3.utils.fromWei(balance, 'ether'),
            meta: 'Campaign Balance',
            description: "Remaining amount of money in the Campaign",
            style: {overflowWrap: 'break-word', backgroundColor: 'rgba(175, 210, 117, 1'}
        },
        ];
        return <Card.Group items={items}/>
    }


        render = () => {
        return (
            <Layout>
                <Divider horizontal>
                    <Header as='h2'>
                        <Icon name='tag' />
                        Campaign Details
                    </Header>
                </Divider>
                <Grid>
                    <Grid.Column width={13}>
                        {this.renderCards()}
                        
                    </Grid.Column>
                    <Grid.Column width={3} divided >
                        <Grid.Row >
                            <Grid.Column>
                                <Segment compact basic color='violet'><ContributeForm address={this.props.address}/></Segment>
                                <Segment basic color='blue'>
                                <Link route={`/campaigns/${this.props.address}/requests`}>
                                    <a><Button basic color='blue' icon labelPosition='left'><Icon name='eye'/>
                                        View Requests
                                        </Button>
                                    </a>
                                    </Link>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            </Layout>
        );
        };
        //return {cardInfo.map(render)};
    }

export default CampaignShow;