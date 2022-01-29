const list = document.querySelectorAll('.navigation li');

const activeLink = () => {
  list.forEach((item) => item.classList.remove('hovered'));
  this.classList.add('hovered');
};
list.forEach((item) => item.addEventListener('mouseover', activeLink));
