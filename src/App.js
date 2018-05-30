import React, { Component } from 'react';
import { Container, Header, List, Segment, Message, Responsive } from 'semantic-ui-react';
import NavBar from './common/NavBar';
import WeaponChart from './weapon/components/WeaponChart';
import ShotgunChart from './weapon/components/ShotgunChart';
import PistolChart from './weapon/components/PistolChart';
import SniperChart from './weapon/components/SniperChart';
import WeaponCard from './weapon/components/WeaponCard';
import SprintOutTable from './weapon/components/SprintOutTable';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

    <Container text style={{ marginTop: '7em' }}>
      <Responsive minWidth={430}>
      <div style={{marginBottom: 30, textAlign: 'center'}} ><span className='ww2 big'>WWII</span> <span className='ww2-sub big'>Weapon Stats</span></div>
      <Segment style={{padding: 30}}>
        <p>View all WWII weapons side by side in order to find the weapon right for you. 
          Select a weapon type below to jump to that stat:</p>
          <div style={{textAlign: 'center'}}>
            <WeaponCard name='Assault' link='assault' />
            <WeaponCard name='SMG' link='assault' />
            <WeaponCard name='LMG' link='assault' />
            <WeaponCard name='Shotgun' link='shotgun' />
            <WeaponCard name='Pistol' link='pistol' />
            <WeaponCard name='Sniper' link='sniper' />
          </div>
      </Segment>
      </Responsive>

      <Header as='h2' className="divided" id='assault'>Assault, SMG, and LMG Weapon Data</Header>
      
      <WeaponChart />

      <Header as='h2' className="divided" id='shotgun'>Shotgun Weapon Data</Header>
      <ShotgunChart />

      <Header as='h2' className="divided" id='pistol'>Pistol Weapon Data</Header>
      <PistolChart />

      <Header as='h2' className="divided" id='sniper'>Sniper Weapon Data</Header>
      <SniperChart />

      <Header as='h2' className="divided" id='sniper'>Weapon ADS/Sprint out Times</Header>
      <SprintOutTable />
      
        <Message info style={{marginTop: 20}}>
          <Message.Header>
            More to Come
          </Message.Header>
          Here's what's coming next in order:
          <ul>
            <li>Silencer Stats</li>
            <li>Advanced Rifiling</li>
            <li>Time to Kill Graph</li>
          </ul>

          Features recently added:
          <ul>
            <li>Winter Siege Weapon Data</li>
            <li>M30 Rifle Bullet Data</li>
            <li>Hardcore Data</li>
            <li>Pistol Data</li>
          </ul>
        </Message>
    </Container>

    <Segment
      inverted
      vertical
      style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
    >
      <Container textAlign='center'>
        <List horizontal inverted divided link>
          <List.Item as='a' href='https://github.com/StealthyPancake/ww2' target="_blank">Source Code</List.Item>
          <List.Item as='a' href='mailto:Stealthy.Pancake.Gaming@gmail.com'>Contact Us</List.Item>
          <List.Item as='a' href='https://github.com/StealthyPancake/ww2/blob/master/LICENSE' target="_blank">Terms and Conditions</List.Item>
        </List>
      </Container>
    </Segment>
      </div>
    );
  }
}

export default App;
