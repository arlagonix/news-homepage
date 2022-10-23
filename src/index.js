import './index.css';
import './index.html';

const openNavElement = document.getElementById('openNavElement');
const closeNavElement = document.getElementById('closeNavElement');
const mySidenav = document.getElementById('mySidenav');
const backShadow = document.getElementById('backShadow');

openNavElement.addEventListener('click', () => {
  mySidenav.style.width = '256px';
  backShadow.classList.remove('hidden');
});

closeNavElement.addEventListener('click', () => {
  mySidenav.style.width = '0px';
  backShadow.classList.add('hidden');
});
