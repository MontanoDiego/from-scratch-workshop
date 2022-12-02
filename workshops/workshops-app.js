// IMPORT

import { getWorkshops, signOutUser } from '../fetch-utils.js';
import { renderWorkshop } from '../render-utils.js';



// DOM

const signOut = document.getElementById('sign-out-link');
const workshopsEl = document.getElementById('workshops-container');

// EVENTS

signOut.addEventListener('click', async () => {
    await signOutUser();
});


// display functions 

async function displayWorkshops() {
    // fetch families from supabase
    const workshops = await getWorkshops();
    // clear out the workshopsEl
    workshopsEl.innerHTML = '';

    for (let workshop of workshops) {
        const workshopEl = renderWorkshop(workshop);
        const participantsEl = document.createElement('ul');
        for (let participant of workshop.participants) {
            const participantEl = document.createElement('div');
            participantEl.addEventListener('click', async () => {
                console.log('clicked!');
            });
            participantEl.classList.add('participant');
            participantEl.textContent = participant.name;

            participantsEl.append(participantEl);
        }
        workshopEl.append(participantsEl);
        workshopsEl.append(workshopEl);
    }
}