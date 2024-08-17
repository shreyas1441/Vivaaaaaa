// Load the Google Sign-In client library
function handleCredentialResponse(response) {
    const userObject = jwt_decode(response.credential);
    displayUserDetails(userObject);
}

function displayUserDetails(user) {
    const accountDetailsDiv = document.getElementById("accountDetails");
    accountDetailsDiv.innerHTML = `
        <h2>Welcome, ${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Picture:</strong> <img src="${user.picture}" alt="Profile Picture" /></p>
    `;
    accountDetailsDiv.style.display = "block";
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: 'AIzaSyDKothN5kLfBYKs1bCg7dKEnzfPtqomQsA',
        callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
        document.getElementById("googleSignInBtn"), 
        { theme: "outline", size: "large" }
    );

    google.accounts.id.prompt();
};
