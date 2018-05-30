import React, { Component } from 'react';

class WeaponTooltip extends Component {

    displayMetadata(metadata) {
        if(!metadata) return null;

        const damageProfile = metadata.damageProfile;
        const rof = metadata.rof;
        const rapidFire = metadata.rapidFire;
        const t2kProfile = metadata.t2kProfile;
        const ammo = metadata.ammo;
        const extAmmo = metadata.extAmmo;
        const notes = metadata.notes;
        const ads = metadata.ads;
        const sprintOut = metadata.sprintOut;

        return (
            <div>
                {damageProfile && <p>Damage: { damageProfile }</p>}
                {t2kProfile && <p>Time to Kill: {t2kProfile} (ms)</p>}
                {rof && <p>Rate of Fire: {rof} or {rapidFire} w/ Rapid Fire</p>}
                {ammo && <p>Ammo: {ammo} {extAmmo && `or ${extAmmo} w/ Ext Mags` } </p>}
                {ads && <p>Aim Down Sight: {ads} ms</p>}
                {sprintOut && <p>Sprint Out Time: {sprintOut} ms </p>}
                {notes && <p>Notes: 
                    <ul>
                        {notes.map(note => <li>{note}</li>)}
                    </ul>
                </p>}
            </div>
        )
    }

    render() {
        const {active, payload, label} = this.props;
        const firstPayload = payload[0];
        const metadata = firstPayload ? firstPayload.payload : null;
        
        let total = 0;
        if(!active) return null;

        return (
        <div className="custom-tooltip" style={{backgroundColor:'white', padding: 10, textAlign: 'left'}} >
            <h3>{label} {metadata && '(' + metadata.type + ')'}</h3>
            {payload && payload.map((stat, index) => {
                let start = total + 1;
                total += stat.value;
                if(total === 0 || start > 100 || !stat.value) return null;

                return <p key={label + index} style={{color: stat.color}}>{stat.dataKey} Shot:{`${start} - ${total}m`}</p>;
             })}
             {this.displayMetadata(metadata)}
        </div>);
    }
}

export default WeaponTooltip;