var usuario = prompt("Cual es tu peso");
var g_tierra = 9.8;
var g_marte = 3.6;
var g_jupiter = 24.8;
var peso = usuario;
var peso_final;


peso_final = peso * g_marte / g_tierra;



document.write(peso_final.toFixed(2));