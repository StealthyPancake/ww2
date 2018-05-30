import React, { Component } from 'react';
import {Table} from 'semantic-ui-react';
import sortBy from 'lodash/sortBy'
import pistolData from '../pistolData';
import weaponData from '../weaponData';
import shotgunData from '../shotgunData';
import sniperData from '../sniperData';

class SprintOutTable extends Component {

    render () {

        return (
            <div style={{textAlign:'center'}}>
            <label>Weapon Type</label>
            <table align='center'><tbody>
                <tr>
                    <td className='Pistol' style={{padding: '5px 10px'}}>Pistol</td>
                    <td className='SMG' style={{padding: '5px 10px'}}>SMG</td>
                    <td className='Assault'style={{padding: '5px 10px'}}>Assault</td>
                    
                </tr>
                <tr>
                    <td className='Shotgun' style={{padding: '5px 10px'}}>Shotgun</td>
                    <td className='LMG' style={{padding: '5px 10px'}}>LMG</td>
                    <td className='Sniper' style={{padding: '5px 10px'}}>Sniper</td>
                </tr>
                </tbody>
            </table>
                <Table size='small' compact celled unstackable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Weapon</Table.HeaderCell>
        <Table.HeaderCell>ADS (ms)</Table.HeaderCell>
        <Table.HeaderCell>Sprint Out (ms)</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {sortBy([].concat(weaponData).concat(pistolData).concat(shotgunData).concat(sniperData), ['ads','name'])
        .map(weapon => (
            <Table.Row className={weapon.type} key={weapon.name}>
        <Table.Cell><strong>{weapon.name}</strong></Table.Cell>
        <Table.Cell>{weapon.ads}</Table.Cell>
        <Table.Cell>{weapon.sprintOut}</Table.Cell>
      </Table.Row>
        ))}
    </Table.Body>
  </Table>
            </div>
        )
    }
}

export default SprintOutTable;