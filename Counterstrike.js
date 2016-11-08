"use strict";
var zaehler = 0;

function buttonGedrueckt() 
{
    zaehler++;
    document.getElementById("ZaehlerAnzeige").innerHTML = "pressed " + zaehler + " times";
}