let sniperData = [
    { name:'Karabin', type: 'Sniper', rof: 222, ammo: 10, extAmmo: 15, damage: [{length: 100, amount: 80}], multiplier: {head: 1.5, chest: 1, ab: 1, legs: 1, feet: 1}, ads: 366, sprintOut: 366},
    { name:'Lee Enfield', type: 'Sniper', rof: 48, ammo: 10, extAmmo: 15, damage: [{length: 100, amount: 80}], multiplier: {head: 1.5, chest: 1.5, ab: 1, legs: 1, feet: 1}, ads: 370, sprintOut: 370},
    { name:'M1903', type: 'Sniper', rof: 40, ammo: 5, extAmmo: 7, damage: [{length: 100, amount: 99}], multiplier: {head: 1.5, chest: 1.5, ab: 1.5, legs: 1.5, feet: 1}, ads: 420, sprintOut: 420},
    { name:'KAR98K', type: 'Sniper', rof: 50, ammo: 5, extAmmo: 7, damage: [{length: 100, amount: 95}], multiplier: {head: 1.5, chest: 1.5, ab: 1.5, legs: 1, feet: 1}, ads: 420, sprintOut: 420},
    { name:'Type 38', type: 'Sniper', rof: 50, ammo: 5, extAmmo: 7, damage: [{length: 100, amount: 80}], multiplier: {head: 1.5, chest: 1.5, ab: 1, legs: 1, feet: 1}, ads: 350, sprintOut: 350},
    { name:'Lever Action', type: 'Sniper', rof: 60, ammo: 6, extAmmo: 9, damage: [{length: 100, amount: 75}], multiplier: {head: 1.5, chest: 1.5, ab: 1, legs: 1, feet: 1}, ads: 370, sprintOut: 370},
    { name:'PTRS 41', type: 'Sniper', rof: 86, ammo: 5, extAmmo: 7, damage: [{length: 100, amount: 99}], multiplier: {head: 2, chest: 2, ab: 2, legs: 1.2, feet: 1.2}, ads: 450, sprintOut: 450},
];

export const m30RifleData = { name:'M30 Rifle Bullet', type: 'Sniper', rof: 15, ammo: 1, extAmmo: 1, damage: [{length: 100, amount: 80}], multiplier: {head: 1.5, chest: 1.5, ab: 1, legs: 1, feet: 1}, metadata: {'ROF with Hustle': 19, 'notes': ['Using the Infintry division does not increase Rifle Bullet ammo count.']}};

export default sniperData;