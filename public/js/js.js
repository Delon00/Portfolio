//------------------------MODAL
const toggleLabel = document.querySelector('.toggle');
  // Sélectionnez le modal
  const modal = document.getElementById('myModal');

  // Ajoutez un gestionnaire d'événements click à l'étiquette
  toggleLabel.addEventListener('click', function() {
    // Ajoutez ou supprimez la classe "show" pour contrôler la visibilité du modal
    modal.classList.toggle('show');
  });

  // // Sélectionnez l'élément de fermeture du modal
  // const closeModal = document.querySelector('.close');

  // // Ajoutez un gestionnaire d'événements click à l'élément de fermeture du modal
  // closeModal.addEventListener('click', function() {
  //   // Supprimez la classe "show" pour masquer le modal
  //   modal.classList.remove('show');
  // });

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
