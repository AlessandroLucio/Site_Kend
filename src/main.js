import './style.css'

const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');


menuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');  
});


document.addEventListener('click', function(event) {
  if (!menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
    mobileMenu.classList.add('hidden');
    menuButton.innerHTML = '☰';
  }
});
