//------------------------MENU
const toggleLabel = document.querySelector('.toggle');
const menu = document.getElementById('myModal');
const toggle = document.querySelector('.off')
toggleLabel.addEventListener('click', function(){
    menu.classList.add('show');
    toggle.classList.remove('off')
    toggle.classList.add('on')
  });
const closeMenu = document.querySelector('.on');
closeMenu.addEventListener('click', function() {
  menu.classList.remove('show');
  toggle.classList.remove('on')
  toggle.classList.add('off')
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
