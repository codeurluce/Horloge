// // horloges.js

// // Tableau de décalage horaire par nom de ville
// export const timezones = {
//     "Dakar": 0,      // UTC
//     "Paris": 1,      // UTC+1
//     "New York": -5,  // UTC-5
//     "Pékin": 8       // UTC+8
// };

// // Mettre à jour toutes les horloges sans data-timezone
// export const updateAllHorloges = () => {
//     const horloges = document.querySelectorAll('.container');
//     horloges.forEach(horlogeContainer => {
//         const countryName = horlogeContainer.querySelector('p').textContent.trim(); // Lire le nom du pays
//         const timezoneOffset = timezones[countryName];  // Obtenir le décalage horaire depuis l'objet

//         if (timezoneOffset !== undefined) {
//             updateHorloge(horlogeContainer, timezoneOffset);  // Mettre à jour l'horloge avec le bon décalage
//         } else {
//             console.error("Aucun décalage horaire trouvé pour " + countryName);
//         }
//     });
// };

// // Fonction pour mettre à jour une horloge en fonction du décalage horaire
// const updateHorloge = (horlogeContainer, timezoneOffset) => {
//     const date = new Date();
//     date.setHours(date.getHours() + timezoneOffset); // Appliquer le décalage horaire

//     const horlogeElement = horlogeContainer.querySelector('.heure'); // Trouver l'élément de l'horloge
//     horlogeElement.innerHTML = date.toLocaleTimeString(); // Mettre à jour l'heure affichée
// };
