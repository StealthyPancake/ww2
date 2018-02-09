let sniperData = [
    { name:'Karabin', type: 'Sniper', rof: 222, ammo: 10, extAmmo: 15, damage: [{length: 100, amount: 80}], multiplier: {head: 1.5, chest: 1, ab: 1, legs: 1, feet: 1}},
    { name:'Lee Enfield', type: 'Sniper', rof: 48, ammo: 10, extAmmo: 15, damage: [{length: 100, amount: 80}], multiplier: {head: 1.5, chest: 1.5, ab: 1, legs: 1, feet: 1}},
    { name:'M1903', type: 'Sniper', rof: 40, ammo: 5, extAmmo: 7, damage: [{length: 100, amount: 99}], multiplier: {head: 1.5, chest: 1.5, ab: 1.5, legs: 1.5, feet: 1}},
    { name:'KAR98K', type: 'Shotgun', rof: 50, ammo: 5, extAmmo: 7, damage: [{length: 100, amount: 95}], multiplier: {head: 1.5, chest: 1.5, ab: 1.5, legs: 1, feet: 1}},
];

export const m30RifleData = { name:'M30 Rifle Bullet', type: 'Sniper', rof: 15, ammo: 1, extAmmo: 1, damage: [{length: 100, amount: 80}], multiplier: {head: 1.5, chest: 1.5, ab: 1, legs: 1, feet: 1}, metadata: {'ROF with Hustle': 19, 'notes': ['Using the Infintry division does not increase Rifle Bullet ammo count.']}};

export default sniperData;