const body = document.querySelector("body");
hourHand = document.querySelector(".hour");
minuteHand = document.querySelector(".minute");
secondHand = document.querySelector(".seconde");
modeSwitch = document.querySelector(".mode-switch");

// Si le theme est en mode sombre, on ajoute la classe dark à l'element body
if (localStorage.getItem("theme") === "Mode Sombre") {
    body.classList.add("dark");
    // Change le texte du bouton pour afficher le mode Clair.
    modeSwitch.textContent = "Mode Clair";
}
// Fonction qui permet de changer le theme de la page lorsqu'on clique sur le bouton
modeSwitch.addEventListener("click", () => {
    // basculer entre le mode sombre  et  clair
    body.classList.toggle("dark");

    // verifier si le theme est en mode sombre et changer le texte du bouton en fonction du mode actif
    const text = body.classList.contains("dark");
    modeSwitch.textContent = text ? "Mode Clair" : "Mode Sombre";
    // Enregistrer le theme actif dans le local storage
    localStorage.setItem("theme", text ? "Mode Sombre" : "Mode Clair");
});

// Récupérer toutes les horloges analogiques et numériques
const horloges = document.querySelectorAll(".container");

// Fonction pour mettre à jour une horloge avec un décalage horaire spécifique
const updateHorloge = (horlogeContainer, timezoneOffset) => {
    let date = new Date(new Date().toUTCString()); // Obtenir l'heure UTC
    date.setHours(date.getUTCHours() + timezoneOffset); // Appliquer le décalage horaire

    const hourHand = horlogeContainer.querySelector(".hour");
    const minuteHand = horlogeContainer.querySelector(".minute");
    const secondHand = horlogeContainer.querySelector(".seconde");
    const horlogeNumerique = horlogeContainer.querySelector(".horloge-numerique p");

    const secToDeg = (date.getSeconds() / 60) * 360;
    const minToDeg = (date.getMinutes() / 60) * 360 + (secToDeg / 60);
    const hourToDeg = (date.getHours() % 12) * 30 + (minToDeg / 12);

    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hourToDeg}deg)`;

    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');

    horlogeNumerique.textContent = `${hours} : ${minutes} : ${seconds}`;
    // horlogeNumerique.textContent =`${hours}H : ${minutes}m : ${seconds}s`;
};

// Mettre à jour toutes les horloges
const updateAllHorloges = () => {
    horloges.forEach(horloge => {
        const timezoneOffset = parseInt(horloge.getAttribute("data-timezone")); // Lire le décalage horaire
        updateHorloge(horloge, timezoneOffset);
    });
};

// Mettre à jour toutes les secondes
setInterval(updateAllHorloges, 1000);
updateAllHorloges();