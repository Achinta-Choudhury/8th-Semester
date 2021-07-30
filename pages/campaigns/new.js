import React, {Component} from 'react';
import Layout from '../../components/Layout';
import {Form, Button, Divider, Header, Icon, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import {Router} from '../../routes';

class CampaignNew extends Component {
    state = {
        minimumContribution: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({ loading: true, errorMessage: ''});

        try{
            const accounts = await web3.eth.getAccounts();

            await factory.methods
            .createCampaign(this.state.minimumContribution)
            .send({
            from: accounts[0]
            });
            Router.pushRoute('/');
        } catch(err) {
            this.setState({ errorMessage: err.message});
        }
        this.setState({loading: false});
    };

    render() {
        return(
        <Layout>
            <Divider horizontal>
                <Header as='h2'>
                <Icon name='tag' />
                Create a New Campaign
                </Header>
            </Divider>
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label> Minimum Contribution</label>
                    <Input icon='bitcoin'  iconPosition='left' label="wei" labelPosition="right"
                    value={this.state.minimumContribution}
                    onChange={event => this.setState({ minimumContribution: event.target.value })}/>
                </Form.Field>

                <Message negative error
                icon='ban'
                header='Something is wrong!! '
                content={this.state.errorMessage}
                />

                <Button
                loading={this.state.loading} basic color='red' 
                icon labelPosition='left'>
                    <Icon name='add circle'/>
                    Create !
                </Button>
            </Form>
        </Layout>
        );
    }
}

export default CampaignNew;