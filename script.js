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

// Fonction qui permet de mettre à jour l'heure
const updatetime = () => {
    // Crée un objet Date qui récupère l'heure actuelle
        let date = new Date(); 

    //Recupere le nombre de secondes actuelles (valeur entre 0 et 59)
    //On divise par 60 pour obtenir une fraction du tour complet (exp: 30 s = 0.5 tours)
    //Puis on multiplie par 360 pour convertir la valeur en degrés (exp: 0.5 tours * 360 = 180°)
    const secToDeg = (date.getSeconds() / 60) * 360; // 60 secondes dans une minute
    const minToDeg = (date.getMinutes() / 60) * 360 + (secToDeg / 60); // Les minutes et secondes influent l'aiguille des minutes
    const hourToDeg = (date.getHours() % 12) * 30 + (minToDeg / 12); // 12 heures dans une journée (30° par heure) et correction avec les minutes

    // Rotation des aiguilles des secondes, minutes et heures
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hourToDeg}deg)`;
 };

 // Cette fonction est appelee toutes les secondes
setInterval(updatetime, 1000);
updatetime();