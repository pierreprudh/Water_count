const cup = document.querySelector('.cup');
const startButton = document.getElementById('start-button');

startButton.addEventListener('click', () => {
  cup.classList.add('animate');

  // Supprimer la classe "animate" après 10 secondes pour arrêter l'animation
  setTimeout(() => {
    cup.classList.remove('animate');
  }, 10000);
});
