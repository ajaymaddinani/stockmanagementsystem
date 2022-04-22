import React, { useState } from 'react'
import {  GoogleLogout } from 'react-google-login';
import { useHistory } from "react-router-dom";
import {
  Container,
  Placeholder,
  Menu,
  Icon
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Stocks from '../stocks/Stocks'
export default function Home()
{
    let history = useHistory();
    const clientId = "365309499663-se0udqcf102jspmokbqgf14non0ifuav.apps.googleusercontent.com";
    const [tab, setActiveTab] = useState('Stocks');
    const onSignoutSuccess = () => {
    history.push('/');
    };
   
    return(
    <div>
    <Menu fixed='top' inverted>
        <Container>
        <Menu.Item as='a' onClick={()=>setActiveTab('Stocks')}><Icon name='line graph' />Stocks</Menu.Item>
        <Menu.Item as='a'  onClick={()=>setActiveTab('Profile')}><Icon name='user' />Profile</Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item as='a' position='right'> 
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                />
            </Menu.Item>
        </Menu.Menu>
        </Container>
    </Menu>
   
    <div>
    <Placeholder>
    <Placeholder.Line />
    <Placeholder.Line />
    <Placeholder.Line />
    </Placeholder>
        {tab=='Stocks' && <Stocks />}
    </div >
 
   

  
    </div>

)
};