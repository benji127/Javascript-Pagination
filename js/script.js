// Load user data from data.js
const userData = users;

// Constants
const usersPerPage = 10;
let currentPage = 1;

// Function to display users on the page
function displayUsers(page) {
    const startIndex = (page - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    
    const userList = document.querySelector('.contact-list');
    userList.innerHTML = '';

    for (let i = startIndex; i < endIndex && i < userData.length; i++) {
        const user = userData[i];
        
        const listItem = document.createElement('li');
        listItem.classList.add('contact-item', 'cf');

        const contactDetails = document.createElement('div');
        contactDetails.classList.add('contact-details');

        const avatar = document.createElement('img');
        avatar.classList.add('avatar');
        avatar.src = user.image;

        const userName = document.createElement('h3');
        userName.textContent = user.name;

        const userEmail = document.createElement('span');
        userEmail.classList.add('email');
        userEmail.textContent = user.email;

        contactDetails.appendChild(avatar);
        contactDetails.appendChild(userName);
        contactDetails.appendChild(userEmail);

        const joinedDetails = document.createElement('div');
        joinedDetails.classList.add('joined-details');

        const joinDate = document.createElement('span');
        joinDate.classList.add('date');
        joinDate.textContent = `Joined ${user.joined}`;

        joinedDetails.appendChild(joinDate);

        listItem.appendChild(contactDetails);
        listItem.appendChild(joinedDetails);

        userList.appendChild(listItem);
    }
}

// Function to update pagination links
function updatePagination() {
    const totalUsers = userData.length;
    const totalPages = Math.ceil(totalUsers / usersPerPage);

    const paginationList = document.querySelector('.pagination');
    paginationList.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('li');
        const pageLink = document.createElement('a');
        
        pageLink.href = '#';
        pageLink.textContent = i;
        pageLink.addEventListener('click', () => {
            currentPage = i;
            displayUsers(currentPage);
            updatePagination();
        });

        pageItem.appendChild(pageLink);
        paginationList.appendChild(pageItem);
    }
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    displayUsers(currentPage);
    updatePagination();
});
