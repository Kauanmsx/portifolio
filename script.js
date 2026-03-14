const form = document.getElementById("formulario");

form.addEventListener("submit", function(e){

e.preventDefault();

const nome = document.querySelector("input").value;
const mensagem = document.querySelector("textarea").value;

const telefone = "5571981825574";

const texto = `Olá meu nome é ${nome}. ${mensagem}`;

const msg = encodeURIComponent(texto);

window.open(`https://whatsa.me/${telefone}?text=${msg}`);

});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

sections.forEach(sec=>{

const top = window.scrollY;
const offset = sec.offsetTop - 400;

if(top > offset){
sec.classList.add("ativo");
}

});

});
