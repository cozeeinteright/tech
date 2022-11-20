console.log("hello");

const welcomeDiv = document.getElementById("welcomeMessage");
const signInButton = document.getElementById("signIn");
const signOutButton = document.getElementById('signOut');

function showWelcomeMessage(accout) {
  welcomeDiv.innerHTML = `Welcome ${accout.name}`;
}

const accout = {
  name: "koji",
  age: 42,
}

showWelcomeMessage(accout);
