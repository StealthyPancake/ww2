let shotgunData = [
    { name:'Combat Shotgun', type: 'Shotgun', rof: 58, ammo: 7, extAmmo: 10, damage: [{length: 12, amount: 100}, {length: 3, amount: 55}], ads: 250, sprintOut: 250},
    { name:'M30', type: 'Shotgun', rof: 150, ammo: 2, damage: [{length: 5, amount: 150}, {length: 13, amount: 100}], ads: 250, sprintOut: 250},
    { name:'Toggle Action', type: 'Shotgun', rof: 160, ammo: 8, extAmmo: 12, damage: [{length: 2, amount: 110}, {length: 5, amount: 55}, {length: 8, amount: 49}], ads: 250, sprintOut: 250},
    { name:'Sawed-off', type: 'Shotgun', rof: 130, ammo: 2, damage: [{length: 7, amount: 100}, {length: 3, amount: 65}, {length: 8, amount: 55}], ads: 250, sprintOut: 250},
    { name:'Blunderbuss', type: 'Shotgun', rof: 17, ammo: 1, damage: [{length: 14, amount: 100}, {length: 2, amount: 86}, {length: 2, amount: 30}], ads: 250, sprintOut: 350, notes: ["There is only 1 shell in the gun, so ROF is limited by reload speed"]},
];

export default shotgunData;