import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import { Container, Menu, Dropdown } from 'semantic-ui-react';

export default class NavBar extends Component {
    render() {
        return (
            <Menu fixed='top' inverted>
            <Container>
              <Menu.Item as='a' header style={{fontSize: 18, padding: 20}}>
                <span className='ww2'>WWII</span> <span className='ww2-sub'>Weapon Stats</span>
              </Menu.Item>
              <Dropdown item simple text='Go To'>
                <Dropdown.Menu>
                    <Dropdown.Item as={() =>
                        <Scrollchor to='#assault' className="nav-link item" animate={{offset: -100, duration: 600}}>
                        Assault Data
                        </Scrollchor>} 
                    />
                    <Dropdown.Item as={() =>
                        <Scrollchor to='#assault' className="nav-link item" animate={{offset: -100, duration: 600}}>
                        SMG Data
                        </Scrollchor>
                    }/>
                    <Dropdown.Item as={() =>
                        <Scrollchor to='#assault' className="nav-link item" animate={{offset: -100, duration: 600}}>
                        LMG Data
                        </Scrollchor>
                    }/>
                    <Dropdown.Item as={() =>
                        <Scrollchor to='#shotgun' className="nav-link item" animate={{offset: -100, duration: 600}}>
                        Shotgun Data
                        </Scrollchor>
                    }/>
                    <Dropdown.Item as={() =>
                        <Scrollchor to='#pistol' className="nav-link item" animate={{offset: -100, duration: 600}}>
                        Pistol Data
                        </Scrollchor>
                    }/>
                    <Dropdown.Item as={() =>
                        <Scrollchor to='#sniper' className="nav-link item" animate={{offset: -100, duration: 600}}>
                        Sniper Data
                        </Scrollchor>
                    }/>
                </Dropdown.Menu>
                </Dropdown>
            </Container>
          </Menu>
        );

    }
}