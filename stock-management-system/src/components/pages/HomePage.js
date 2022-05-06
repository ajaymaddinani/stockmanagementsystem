import React, { useState } from 'react'
import {  GoogleLogout } from 'react-google-login';
import { useHistory,useLocation  } from "react-router-dom";
import {
  Container,
  Placeholder,
  Menu,
  Icon
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Stocks from '../stocks/Stocks'
import Logout from '../../authenticate/Logout'
import Predictions from './predictions/prediction'
import Simulations from './simulations/simulation'

export default function Home()
{
    let history = useHistory();
    const [tab, setActiveTab] = useState('Stocks');
  
    const location = useLocation();
    console.log(location.state.detail.givenName);
   
    return(
    <div>
    <Menu fixed='top' inverted>
        <Menu.Item as='a' onClick={()=>setActiveTab('Dashboard')}><Icon name='line graph' />Dashboard</Menu.Item>
        <Menu.Item as='a' onClick={()=>setActiveTab('Predictions')}><Icon name='bullseye' />Predictions</Menu.Item>
        <Menu.Item as='a' onClick={()=>setActiveTab('Simulate')}><Icon name='cogs' />Simulate</Menu.Item>
        <Menu.Item as='a'  onClick={()=>setActiveTab('Profile')}><Icon name='user' />{location.state.detail.givenName}</Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item as='a' position='right'> 
                <Logout/>
            </Menu.Item>
        </Menu.Menu>
    </Menu>
   
    <div>
    <Placeholder>
    <Placeholder.Line />
    <Placeholder.Line />
    <Placeholder.Line />
    </Placeholder>
        {tab=='Dashboard' && <Stocks />}
        {tab=='Predictions' && <Predictions />}
        {tab=='Simulate' && <Simulations />}
    </div >
 
   

  
    </div>

)
};