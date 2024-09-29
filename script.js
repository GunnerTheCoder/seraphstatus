// Check the moderation status of a user
function checkModerationStatus() {
    const username = document.getElementById('check-username').value;
    
    if (username !== "") {
        let moderationData = JSON.parse(localStorage.getItem('moderationData'));
        const user = moderationData.find(user => user.username === username);

        const checkResult = document.getElementById('check-result');
        if (user) {
            checkResult.innerHTML = `User: ${user.username} | Status: ${user.status}`;
        } else {
            checkResult.innerHTML = `User not found.`;
        }
    } else {
        alert("Please enter a username.");
    }
}

// Update the moderation status of a user
function updateModeration() {
    const username = document.getElementById('moderation-username').value;
    const status = document.getElementById('moderation-status').value;

    if (username !== "") {
        let moderationData = JSON.parse(localStorage.getItem('moderationData')) || [];

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

// Example to initialize moderation data if empty
if (!localStorage.getItem('moderationData')) {
    localStorage.setItem('moderationData', JSON.stringify([]));
}
