// imports

import { signOutUser } from '../fetch-utils.js';

// DOM
const signOut = document.getElementById('sign-out-link');

// events

signOut.addEventListener('click', async () => {
    await signOutUser();
});


// display