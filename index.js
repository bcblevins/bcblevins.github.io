const vetraCard = document.querySelector('.vetra');
const vetraHeader = document.querySelector('.vetra-header');
const vetraDescription = document.createElement('p');
vetraDescription.classList.add('vetra');
vetraDescription.classList.add('description');
vetraDescription.classList.add('hide');
vetraCard.appendChild(vetraDescription);
vetraDescription.innerText = 
"VetRA is a web application that streamlines communication between veterinarians and pet owners. It allows pet owners to easily access their pet's diagnostic test results and medications, and allows them to communicate with their vet. VetRA is designed to be user-friendly and intuitive, making it easy for both pet owners and veterinarians to use. \n\nVetRA is a project that I designed back to front, using PostgreSQL and Spring Boot for the backend, and Vue.js for the frontend. It currently supports integration with ezyVet's API, allowing VetRA's database to be automatically updated with patient information from hospitals utilizing ezyVet's practice management software. \n\nMy future plans for VetRA include adding more features, such as appointment scheduling and reminders, and expanding the application to include more types of pets and veterinary clinics. I am excited to continue working on VetRA and to see how it can help improve communication between pet owners and veterinarians."

const dateStampCard = document.querySelector('.date-stamp');
const cbcCard = document.querySelector('.cbc');
const mistvaleCard = document.querySelector('.mistvale');

const header = document.querySelector('header');

vetraCard.addEventListener('click', () => {
    vetraCard.classList.toggle('is-selected');
    vetraHeader.classList.toggle('hide');
    vetraDescription.classList.toggle('show');
    header.classList.toggle('hide');
    dateStampCard.classList.toggle('hide');
    cbcCard.classList.toggle('hide');
    mistvaleCard.classList.toggle('hide');
    console.log('vetra');
});

