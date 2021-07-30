import React , { Component } from 'react';
import {Button, Icon, Header, Divider, Table, Segment, Grid} from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';

class RequestIndex extends Component {
    static async getInitialProps(props) {
        const {address} = props.query;
        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestsCount().call();
        const approversCount = await campaign.methods.approversCount().call();
        const requests = await Promise.all(
            Array(parseInt(requestCount))
            .fill()
            .map((element, index) => {
                return campaign.methods.requests(index).call();
            })
        );

        return { address, requests, requestCount, approversCount};
    }

    renderRow() {
        return this.props.requests.map((request, index) => {
            return <RequestRow
            key={index} 
            id={index}
            request={request}
            address={this.props.address}
            approversCount = {this.props.approversCount}
            />
        })
    }
    render() {
        return (
            <Layout>
                <Divider horizontal>
                    <Header as='h2'>
                    <Icon name='tag' />
                    Requests List
                    </Header>
                </Divider>
                <Grid>
                    <Grid.Column width={13}>
                        <Table color='black' inverted>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>ID</Table.HeaderCell>
                                <Table.HeaderCell>Description</Table.HeaderCell>
                                <Table.HeaderCell>Amount</Table.HeaderCell>
                                <Table.HeaderCell>Recipient</Table.HeaderCell>
                                <Table.HeaderCell>Approval</Table.HeaderCell>
                                <Table.HeaderCell>Approve</Table.HeaderCell>
                                <Table.HeaderCell>Finalize</Table.HeaderCell>
                            </Table.Row>
                            </Table.Header>
                            <Table.Body>{this.renderRow()}</Table.Body>
                        </Table>
                        <div>
                                Found {this.props.requestCount} requests
                        </div>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Link route={`/campaigns/${this.props.address}/requests/new`}>
                            <Segment basic color='blue'>
                            <a><Button basic color='blue' icon labelPosition='left'><Icon name='clipboard check'/>Add Requests
                            </Button></a>
                            </Segment>
                        </Link>
                    </Grid.Column>
                </Grid>

                
                
            </Layout>
        );
    }
}
export default RequestIndex;