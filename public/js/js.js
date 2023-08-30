//------------------------MENU
const toggleLabel = document.querySelector('.toggle');
const menu = document.getElementById('myModal');
const openMenu = document.querySelector('.off');
const closeMenu = document.querySelector('.on');

toggleLabel.addEventListener('click', function() {
  menu.classList.add('show');
  openMenu.classList.add('on');
  openMenu.classList.remove('off');
});

closeMenu.addEventListener('click', function() {
  menu.classList.remove('show');
  closeMenu.classList.add('off');
  closeMenu.classList.remove('on');
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
