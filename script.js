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
 
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("ativo");
  });
}, { threshold: 0.1 });
 
sections.forEach(sec => observer.observe(sec));