import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } 
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "PASTE_HERE",
  authDomain: "PASTE_HERE",
  projectId: "PASTE_HERE",
  storageBucket: "PASTE_HERE",
  messagingSenderId: "PASTE_HERE",
  appId: "PASTE_HERE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.register = function () {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => alert("Registered"))
    .catch(err => alert(err.message));
}

window.login = function () {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => window.location.href = "dashboard.html")
    .catch(err => alert(err.message));
}

window.logout = function () {
  signOut(auth).then(() => window.location.href = "index.html");
}
