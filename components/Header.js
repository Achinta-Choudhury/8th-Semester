import React  from 'react'
import { Menu } from 'semantic-ui-react';
import { Link} from '../routes';

export default () => {
    return (
        <Menu inverted style={{ marginTop: '10px'}}>
        <Menu.Item>
          <img src='https://image.flaticon.com/icons/png/512/3698/3698156.png' />
        </Menu.Item>

        <Link route="/">
          <a className="item"> Dapp EVoting</a>
        </Link>
        
        <Menu.Menu position="right">
        <Menu.Item
          name='Campaigns'
        />
        <Link route="/campaigns/new">
          <a className="item"> + </a>
        </Link>
        </Menu.Menu>
      </Menu>
    )
}