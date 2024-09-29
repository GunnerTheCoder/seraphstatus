// Initialize moderation data in localStorage if it doesn't exist
if (!localStorage.getItem('moderationData')) {
    localStorage.setItem('moderationData', JSON.stringify([]));
}

// Check the moderation status of a user
function checkModerationStatus() {
    const username = document.getElementById('check-username').value.trim(); // Trim spaces
    
    if (username) {
        let moderationData = JSON.parse(localStorage.getItem('moderationData')) || [];

        // Find user with the given username
        const user = moderationData.find(user => user.username.toLowerCase() === username.toLowerCase());

        const checkResult = document.getElementById('check-result');
        
        // Show result if user is found
        if (user) {
            checkResult.innerHTML = `User: <strong>${user.username}</strong> | Status: <strong>${user.status}</strong>`;
        } else {
            checkResult.innerHTML = `User <strong>${username}</strong> not found.`;
        }
    } else {
        alert("Please enter a username.");
    }
}

// Update the moderation status of a user
function updateModeration() {
    const username = document.getElementById('moderation-username').value.trim(); // Trim spaces
    const status = document.getElementById('moderation-status').value;

    if (username) {
        let moderationData = JSON.parse(localStorage.getItem('moderationData')) || [];

        // Find user or add new
        const existingUser = moderationData.find(user => user.username.toLowerCase() === username.toLowerCase());
        
        if (existingUser) {
            // Update status if user exists
            existingUser.status = status;
        } else {
            // Add new user if not found
            moderationData.push({ username, status });
        }

        // Save updated data back to localStorage
        localStorage.setItem('moderationData', JSON.stringify(moderationData));

        document.getElementById('moderation-result').textContent = `Status of ${username} updated to ${status}.`;
    } else {
        alert("Please enter a username.");
    }
}

// Example function to show moderation data in console (for debugging)
function displayModerationData() {
    let moderationData = JSON.parse(localStorage.getItem('moderationData'));
    console.log(moderationData);
}
