var usuario = parseInt(prompt("Cual es tu peso en KG"));
var g_tierra = 9.8;
var g_marte = 3.6;
var g_jupiter = 24.8;

var peso_final;




var planeta = parseInt(prompt("Elige tu planeta. 1 es Marte. 2 es Jupiter"));

if (planeta == 1)
{
    peso_final = usuario * g_marte / g_tierra;
    document.write("Tu peso en Marte es " + peso_final.toFixed(2) + " kilogramos");
}
else if (planeta == 2)
{
    peso_final = usuario * g_jupiter / g_tierra;
    document.write("Tu peso en Jupiter es " + peso_final.toFixed(2) + " kilogramos");
}
else 
{
    document.write("Eso no es un numero!")
}





