console.log('Hello World!');


let nav = document.getElementById('nav');
let menu = document.getElementById('menu');
function openMenue() {
  menu.classList.toggle('menuopen');
  nav.classList.toggle('humborger');
}

window.addEventListener('scroll', function (){
  var header = document.querySelector('header');
  header.classList.toggle('fixe', window.scrollY > 0);
})

let search = document.getElementById('search-button').value;

function alertWoring(){
  document.getElementById('alert-search').innerHTML = '*We are sorry we are work to solve this problem*';
}

// menu
