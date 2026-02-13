// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "agrosmart-bacd0.firebaseapp.com",
  databaseURL: "https://agrosmart-bacd0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "agrosmart-bacd0",
  storageBucket: "agrosmart-bacd0.appspot.com",
  messagingSenderId: "128910869291",
  appId: "YOUR_APP_ID"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
