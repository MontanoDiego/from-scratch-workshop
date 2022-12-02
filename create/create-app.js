// imports

import { checkAuth, createParticipant, getWorkshops, signOutUser } from '../fetch-utils.js';

// DOM
const signOut = document.getElementById('sign-out-link');
const form = document.getElementById('participant-form');
const workshopSelect = document.getElementById('workshop-selector');

// events

checkAuth();

signOut.addEventListener('click', async () => {
    await signOutUser();
});

form.addEventListener('submit', async (i) => {
    i.preventDefault();

    const data = new FormData(form);

    const name = data.get('participant-name');
    const workshopId = data.get('workshop-id');

    await createParticipant({
        name: name,
        workshop_id: workshopId
    });

    form.reset();
    location.replace('../workshops');

});

window.addEventListener('load', async () => {
    const workshops = await getWorkshops();

    for (let workshop of workshops) {
        const workshopOption = document.createElement('option');

        workshopOption.textContent = workshop.name;
        workshopOption.value = workshop.id;

        workshopSelect.append(workshopOption);
    }
});


// display