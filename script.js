const NOME = "Geovana";
const FRASE = "Um dia que será\ninesquecível";
const DATA_EVENTO = "2026-07-19T13:00:00";
const HORARIO = "12:00";
const LOCAL = "Avila's Espaço e Lazer";
const LINK_GOOGLE_MAPS = "https://maps.app.goo.gl/uxL5KbVN7XQWNgK9A";
const GOOGLE_MAPS_IFRAME = "";
const LINK_GOOGLE_FORMS = "https://docs.google.com/forms/d/e/1FAIpQLSebN9N6HwB4cCvkiU-OWS2wvflwWCgHvu8q1u4Ul19aTsligg/viewform?usp=sharing&ouid=112706203523219906860";
const LINK_PRESENTES = "#";

const meses = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];

const data = new Date(DATA_EVENTO);

document.getElementById("frase").innerHTML = FRASE.replace("\n", "<br>");
document.getElementById("nome").textContent = NOME;
document.getElementById("diaEvento").textContent = data.getDate();
document.getElementById("mesEvento").textContent = "de " + meses[data.getMonth()];
document.getElementById("horario").textContent = HORARIO + " horas";
document.getElementById("local").textContent = LOCAL;

document.getElementById("btnMaps").href = LINK_GOOGLE_MAPS;
document.getElementById("btnForms").href = LINK_GOOGLE_FORMS;
document.getElementById("btnPresentes").href = LINK_PRESENTES;

if (GOOGLE_MAPS_IFRAME.trim() !== "") {
  document.getElementById("mapa").innerHTML = GOOGLE_MAPS_IFRAME;
}

function atualizarContagem() {
  const agora = new Date().getTime();
  const evento = data.getTime();
  const diferenca = evento - agora;

  if (diferenca <= 0) return;

  document.getElementById("dias").textContent = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  document.getElementById("horas").textContent = String(Math.floor((diferenca / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  document.getElementById("minutos").textContent = String(Math.floor((diferenca / (1000 * 60)) % 60)).padStart(2, "0");
  document.getElementById("segundos").textContent = String(Math.floor((diferenca / 1000) % 60)).padStart(2, "0");
}

atualizarContagem();
setInterval(atualizarContagem, 1000);
