"use strict";
const teilnehmerGegangen = false;
const teilnehmerIstImHandy = true;
function learnTS(bedingung1, bedingung2) {
    return new Promise((resolve, reject) => {
        if (bedingung1) {
            reject({
                name: 'hatte kein Bock und ist gegangen',
                message: 'Motivation kommt nicht von allein'
            });
        }
        else if (bedingung2) {
            reject('Insta versus TS: Insta wins');
        }
        else {
            resolve('Teilnehmer ist fleißig am Lernen');
        }
    });
}
learnTS(teilnehmerGegangen, teilnehmerIstImHandy)
    .then((response) => { console.log('Aufgabe erfolgreich erfüllt: \n' + response); })
    // .then() // wenn von dem Callback im höheren then eine Rückgabe kommt, kann man damit im weiteren then arbeiten
    .catch((response) => {
    if (typeof response === typeof Object)
        console.log('Aufgabe gescheitert: \n' + response.message + "\n " + response.name);
    else
        console.log('Aufgabe gescheitert: \n' + response);
});
