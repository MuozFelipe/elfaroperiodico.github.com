function updateClock() {
    var now = new Date();
  
    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
  
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var ampm = hour >= 12 ? 'PM' : 'AM';
  
    // Agrega un cero inicial si los minutos o segundos son menores a 10
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
  
    var clock = day + '/' + month + '/' + year + ' ' + hour + ':' + minute + ':' + second + ' ' + ampm;
    document.getElementById('clock').innerHTML = clock;
  }
  
  // Actualiza el reloj cada segundo
  setInterval(updateClock, 1000);
  

var inputs = document.getElementsByClassName('formulario__input2');
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('keyup', function() {
    if(this.value.length>=1) {
      this.nextElementSibling.classList.add('fijar');
    } else {
      this.nextElementSibling.classList.remove('fijar');
    }
  });
}





//Formulario


formulario.addEventListener('submit', function(event) {
  event.preventDefault();  // Evitar que el formulario se envíe

  // Limpiar los valores de los campos del formulario
  formulario.reset();
});



//menu nav
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

      if (entry.isIntersecting) {
        document.querySelector(".menu a.selected").classList.remove("selected");
        menuLink.classList.add("selected");
      }
    });
  },
  { rootMargin: "-30% 0px -70% 0px" }
);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_opened");
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});



//formulario 2 

var articles = {
  noticias: [],
  deportes: [],
  negocios: []
};

function renderArticleList(section) {
  var sectionList = document.getElementById(section + 'List');
  var html = '';

  articles[section].forEach(function(article) {
    html += '<li><h2>' + article.title + '</h2><p>' + article.content + '</p></li>';
  });

  sectionList.innerHTML = html;
}





function addArticle(event) {
  event.preventDefault();

  var titleInput = document.getElementById('title');
  var contentInput = document.getElementById('content');
  var sectionInput = document.getElementById('section');

  var newArticle = {
    title: titleInput.value,
    content: contentInput.value
  };

  var section = sectionInput.value;

  articles[section].push(newArticle);

  // Limpia el formulario
  titleInput.value = '';
  contentInput.value = '';
  sectionInput.value = '';

  renderArticleList(section);
}

window.addEventListener('load', function() {
  renderArticleList('noticias');
  renderArticleList('deportes');
  renderArticleList('negocios');
});

var articleForm = document.getElementById('articleForm');
articleForm.addEventListener('submit', addArticle);





//galeria


let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");

let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

function cargar(item){
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";



    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;


    modeloSeleccionado.innerHTML =  item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Descripción ";

    precioSeleccionado.innerHTML =  item.getElementsByTagName("span")[0].innerHTML;


}
function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}
function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "none";
    }
}


precio.style= none; 
