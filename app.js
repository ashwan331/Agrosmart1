// app.js
import { db } from "./firebase.js";
import { ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const form = document.getElementById("cropForm");
const list = document.getElementById("cropList");

form.addEventListener("submit", e => {
  e.preventDefault();

  const crop = document.getElementById("crop").value;
  const moisture = document.getElementById("moisture").value;
  const temp = document.getElementById("temp").value;

  push(ref(db, "crops"), {
    crop,
    moisture,
    temp
  });

  form.reset();
});

onValue(ref(db, "crops"), snapshot => {
  list.innerHTML = "";
  snapshot.forEach(item => {
    const d = item.val();
    list.innerHTML += `
      <li>
        🌱 ${d.crop} | 💧 ${d.moisture}% | 🌡 ${d.temp}°C
      </li>
    `;
  });
});
