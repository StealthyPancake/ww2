export const processData = (data) => {
    return data
    .map(weapon => {
        let shots = [0,0,0,0,0,0,0,0];
        let hardcoreShots = [0,0,0,0,0,0,0,0];
        let damage = weapon.damage;
        let damageProfile = '';
        let prevT2K = -1;
        let hardcorePrevT2K = -1;
        let t2kProfile = '';
        let hardcoreT2kProfile = '';
        let total = 0;

        for(let i=0; i < damage.length; i++) {
            let dataPoint = damage[i];
            let shotsToKill = 100 / dataPoint.amount;
            let hardcoreS2K = Math.ceil(30 / dataPoint.amount);
            shotsToKill = Math.ceil(shotsToKill);
            const t2k = Math.round((shotsToKill - 1) / weapon.rof * 60000);
            const hardT2K = Math.round((hardcoreS2K - 1) / weapon.rof * 60000);

            if(dataPoint.length === '+') {
                shots[shotsToKill] += 100 - total;
                hardcoreShots[hardcoreS2K] += 100 - total;
            } else {
                shots[shotsToKill] += dataPoint.length;
                hardcoreShots[hardcoreS2K] += dataPoint.length;
                total += dataPoint.length;
            }

            if(damageProfile !== '') damageProfile += ' - ';
            damageProfile += dataPoint.amount;

            if(t2k !== prevT2K) {
                prevT2K = t2k;
    
                if(t2kProfile !== '') t2kProfile += ' - ';
                t2kProfile += t2k;
            }

            if(hardT2K !== hardcorePrevT2K) {
                hardcorePrevT2K = hardT2K;
    
                if(hardcoreT2kProfile !== '') hardcoreT2kProfile += ' - ';
                hardcoreT2kProfile += hardT2K;
            }
        }

        return {
            name: weapon.name,
            rof: weapon.rof,
            rapidFire: Math.ceil(weapon.rof * 1.0635),
            damage: weapon.damage,
            type: weapon.type,
            damageProfile,
            t2kProfile,
            hardcoreT2kProfile,
            ammo: weapon.ammo,
            extAmmo: weapon.extAmmo,
            1: shots[1],
            2: shots[2],
            3: shots[3],
            4: shots[4],
            5: shots[5],
            6: shots[6],
            7: shots[7],
            h1: hardcoreShots[1],
            h2: hardcoreShots[2],
            h3: hardcoreShots[3],
            h4: hardcoreShots[4],
            h5: hardcoreShots[5],
            h6: hardcoreShots[6],
            h7: hardcoreShots[7],
        }
    });
};

export const processHardcore = (data) => {
    return data.map((weapon) => {
        return {
            ...weapon,
            1: weapon.h1,
            2: weapon.h2,
            3: weapon.h3,
            4: weapon.h4,
            5: weapon.h5,
            6: weapon.h6,
            7: weapon.h7,
            t2kProfile: weapon.hardcoreT2kProfile
        }
    });
};