const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "user3", password: "password3" },
    { username: "user4", password: "password4" },
    { username: "user5", password: "password5" }
];

let currentUser = null;

function authenticate() {
    const usernameInput = prompt("Enter your username:");
    const passwordInput = prompt("Enter your password:");

    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

    if (user) {
        currentUser = user;
        displayChatroom();
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

function displayChatroom() {
    document.getElementById("chatMessages").innerHTML = `
        <p>Welcome, ${currentUser.username}! You are now logged in.</p>
    `;
}

function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value;

    if (message.trim() !== "") {
        document.getElementById("chatMessages").innerHTML += `
            <p>${currentUser.username}: ${message}</p>
        `;

        messageInput.value = "";
    }
}

window.onload = authenticate;
