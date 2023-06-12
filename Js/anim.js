const cup = document.querySelector('.cup');
const startButton = document.getElementById('start-button');
let counter = 0;

// Créer un élément span pour afficher le compteur
const counterSpan = document.createElement('span');
counterSpan.classList.add('counter');
counterSpan.textContent = counter;

// Créer un conteneur pour le bouton et le compteur
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');
buttonContainer.appendChild(startButton);
buttonContainer.appendChild(counterSpan);

// Insérer le conteneur avant la tasse
cup.insertAdjacentElement('beforebegin', buttonContainer);

startButton.addEventListener('click', () => {
  counter++;
  cup.classList.add('animate');

  // Supprimer la classe "animate" après 10 secondes pour arrêter l'animation
  setTimeout(() => {
    cup.classList.remove('animate');
  }, 10000);

  // Mettre à jour le texte du compteur
  counterSpan.textContent = counter;
});
