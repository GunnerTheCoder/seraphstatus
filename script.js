// Initial setup: check if data exists in localStorage, otherwise set defaults
if (!localStorage.getItem('totalUsers')) {
    localStorage.setItem('totalUsers', 100); // Default users
}
if (!localStorage.getItem('totalMoney')) {
    localStorage.setItem('totalMoney', 5000); // Default money made
}
if (!localStorage.getItem('moderationData')) {
    localStorage.setItem('moderationData', JSON.stringify([])); // Default moderation data
}

// Update the displayed stats on the index page
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('total-users')) {
        document.getElementById('total-users').textContent = localStorage.getItem('totalUsers');
        document.getElementById('total-money').textContent = `$${localStorage.getItem('totalMoney')}`;
    }
});

// Edit stats for users and money
function editUsersAndMoney() {
    const newUsers = prompt("Enter total number of users:", localStorage.getItem('totalUsers'));
    const newMoney = prompt("Enter total money made:", localStorage.getItem('totalMoney'));

    if (newUsers !== null && newMoney !== null) {
        localStorage.setItem('totalUsers', newUsers);
        localStorage.setItem('totalMoney', newMoney);

        document.getElementById('total-users').textContent = newUsers;
        document.getElementById('total-money').textContent = `$${newMoney}`;
    }
}

// Update moderation status on the moderation page
function updateModeration() {
    const username = document.getElementById('moderation-username').value;
    const status = document.getElementById('moderation-status').value;

    if (username !== "") {
        let moderationData = JSON.parse(localStorage.getItem('moderationData'));

        const existingUser = moderationData.find(user => user.username === username);
        if (existingUser) {
            existingUser.status = status;
        } else {
            moderationData.push({ username, status });
        }

        localStorage.setItem('moderationData', JSON.stringify(moderationData));

        document.getElementById('moderation-result').textContent = `Status of ${username} updated to ${status}.`;
    } else {
        alert("Please enter a username.");
    }
}

// To display moderation data (if you want)
function displayModerationData() {
    let moderationData = JSON.parse(localStorage.getItem('moderationData'));
    console.log(moderationData);
}
