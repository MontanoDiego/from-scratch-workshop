// IMPORT

import { deleteParticipant, getWorkshops, signOutUser } from '../fetch-utils.js';
import { renderWorkshop } from '../render-utils.js';



// DOM

const signOut = document.getElementById('sign-out-link');
const workshopsEl = document.querySelector('.workshops-container');

// EVENTS

signOut.addEventListener('click', async () => {
    await signOutUser();
});

window.addEventListener('load', async () => {
    const workshops = await getWorkshops();

    displayWorkshops(workshops);
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
                await deleteParticipant(participant.id);
                displayWorkshops();
            });
            participantEl.classList.add('participant');
            participantEl.textContent = participant.name;

            participantsEl.append(participantEl);
        }
        workshopEl.append(participantsEl);
        workshopsEl.append(workshopEl);
    }
}