import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance =  new web3.eth.Contract(JSON.parse(CampaignFactory.interface),'0xC6AC6027Bca02aE8F5F792D9431C6c505237a543');

export default instance;