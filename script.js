/* CONFIGURAÇÕES */
const NOME="";
const FRASE="";
const DATA_EVENTO="";
const HORARIO="";
const LOCAL="";
const LINK_GOOGLE_MAPS="";
const GOOGLE_MAPS_IFRAME="";
const LINK_GOOGLE_FORMS="";
document.getElementById("nome").textContent=NOME;
document.getElementById("frase").textContent=FRASE;
document.getElementById("horario").textContent=HORARIO;
document.getElementById("local").textContent=LOCAL;
document.getElementById("btnMaps").href=LINK_GOOGLE_MAPS;
document.getElementById("btnForms").href=LINK_GOOGLE_FORMS;
document.getElementById("mapa").innerHTML=GOOGLE_MAPS_IFRAME;
if(DATA_EVENTO){
const d=new Date(DATA_EVENTO);
document.getElementById("dataEvento").textContent=d.toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"});
function c(){const n=Date.now(),e=new Date(DATA_EVENTO).getTime(),x=e-n;if(x<=0)return["dias","horas","minutos","segundos"].forEach(i=>document.getElementById(i).textContent="00");const ds=Math.floor(x/86400000),h=Math.floor(x/3600000%24),m=Math.floor(x/60000%60),s=Math.floor(x/1000%60);dias.textContent=String(ds).padStart(2,"0");horas.textContent=String(h).padStart(2,"0");minutos.textContent=String(m).padStart(2,"0");segundos.textContent=String(s).padStart(2,"0")}c();setInterval(c,1000);}
