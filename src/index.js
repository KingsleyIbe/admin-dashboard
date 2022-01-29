const list = document.querySelectorAll('.navigation li');

const activeLink = () => {
  list.forEach((item) => item.classList.remove('hovered'));
  this.classList.add('hovered');
};
list.forEach((item) => item.addEventListener('mouseover', activeLink));

const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const main = document.querySelector('.main');

toggle.addEventListener('click', () => {
  navigation.classList.toggle('active');
  main.classList.toggle('active');
});
