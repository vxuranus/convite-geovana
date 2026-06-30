/* =========================
   CONFIGURAÇÕES
========================= */

const NOME = "Geovana";
const FRASE = "Um dia que será\ninesquecível";
const DATA_EVENTO = "2026-07-19T13:00:00";
const HORARIO = "13:00 horas";
const LOCAL = "Coloque aqui o endereço completo do evento";

const LINK_GOOGLE_MAPS = "https://www.google.com/maps";
const GOOGLE_MAPS_IFRAME = "";
const LINK_GOOGLE_FORMS = "https://forms.google.com";
const LINK_PRESENTES = "#";

/* =========================
   NÃO MEXA DAQUI PARA BAIXO
========================= */

const meses = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];

const data = new Date(DATA_EVENTO);

document.getElementById("nome").textContent = NOME;
document.getElementById("frase").innerHTML = FRASE.replace("\n", "<br>");

document.getElementById("diaEvento").textContent = data.getDate();
document.getElementById("mesEvento").textContent = `de ${meses[data.getMonth()]}`;

document.getElementById("horario").textContent = HORARIO;
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

  if (diferenca <= 0) {
    document.getElementById("dias").textContent = "00";
    document.getElementById("horas").textContent = "00";
    document.getElementById("minutos").textContent = "00";
    document.getElementById("segundos").textContent = "00";
    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  document.getElementById("dias").textContent = String(dias).padStart(2, "0");
  document.getElementById("horas").textContent = String(horas).padStart(2, "0");
  document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
  document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
}

atualizarContagem();
setInterval(atualizarContagem, 1000);
