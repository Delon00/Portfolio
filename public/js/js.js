//------------------------MENU
// Obtenez les éléments nécessaires
const checkbox = document.getElementById('checkbox');
const menu = document.getElementById('myModal');

// Ajoutez un écouteur d'événement pour le changement de l'état du checkbox
checkbox.addEventListener('change', function() {
  if (this.checked) {
    // Si le checkbox est coché, affichez le modal
    menu.style.display = 'block';
  } else {
    // Sinon, cachez le modal
    menu.style.display = 'none';
  }
});



//------------------------CONEXION SLIDE
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const connection = document.getElementById('connection');
const form = document.getElementById('form')

signUpButton.addEventListener('click', () => {
	connection.classList.add("right-panel-active");
  form.classList.add("cache");
});

signInButton.addEventListener('click', () => {
  connection.classList.remove("right-panel-active");
  setTimeout(() => {
    form.classList.remove("cache");
  }, 300); // Delay of 500 milliseconds
});
