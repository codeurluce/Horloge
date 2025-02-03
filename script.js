const body = document.querySelector("body");
hourHand = document.querySelector(".hour");
minuteHand = document.querySelector(".minute");
secondHand = document.querySelector(".seconde");
modeSwitch = document.querySelector(".mode-switch");

const updatetime = () => {
    // Crée un objet Date qui récupère l'heure actuelle
        let date = new Date(); 
        
    //Recupere le nombre de secondes actuelles (valeur entre 0 et 59)
    //On divise par 60 pour obtenir une fraction du tour complet (exp: 30 s = 0.5 tours)
    //Puis on multiplie par 360 pour convertir la valeur en degrés (exp: 0.5 tours * 360 = 180°)
    secToDeg = (date.getSeconds() / 60) * 360;

    // Rotation de l'aiguille des secondes
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
 };
setInterval(updatetime, 1000);