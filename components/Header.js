import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from '../routes'

export default ()=>{
    return(
        <div>
            <Menu style={{margin:'20px'}}>
                <Menu.Item>
                    <h4>CrowdFund</h4>
                </Menu.Item>
                <Menu.Menu position="right">
                    <Link route='/'>
                        <a className='item'>Campaigns</a>
                    </Link>
                    <Link route='/campaigns/new'>
                        <a className='item'>+</a>
                    </Link>
                </Menu.Menu>
            </Menu>
        </div>
    )
}