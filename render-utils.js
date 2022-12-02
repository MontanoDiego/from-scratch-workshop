export function renderWorkshop(workshopObject) {
    const workshopEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    nameEl.textContent = workshopObject.name;

    workshopEl.classList.add('workshop');

    workshopEl.append(nameEl);

    return workshopEl;
}