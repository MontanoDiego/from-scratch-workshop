// IMPORT

import { signOutUser } from '../fetch-utils.js';



// DOM

const signOut = document.getElementById('sign-out-link');

// EVENTS

signOut.addEventListener('click', async () => {
    await signOutUser();
});