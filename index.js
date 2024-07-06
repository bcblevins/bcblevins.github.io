const vetraCard = document.querySelector('.vetra');
const vetraHeader = document.querySelector('.vetra-header');

const dateStampCard = document.querySelector('.date-stamp');
const cbcCard = document.querySelector('.cbc');
const mistvaleCard = document.querySelector('.mistvale');

const header = document.querySelector('header');

vetraCard.addEventListener('click', () => {
    vetraCard.classList.toggle('is-selected');
    vetraHeader.classList.toggle('hide');

    header.classList.toggle('hide');
    dateStampCard.classList.toggle('hide');
    cbcCard.classList.toggle('hide');
    mistvaleCard.classList.toggle('hide');
    console.log('vetra');
});