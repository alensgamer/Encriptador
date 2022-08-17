function es(va){
    document.write(va)
}
function sal(se){
    var si = 1;
    while(si<=se){
        document.write("<br>");
        si++;
    } 
}
function cons(si){
    console.log(si);
}

function escribir2() {
//valores Iniciales
    var valor = document.getElementById('entrada').value;
///codigo mio
    var kore= valor.split("");
    var ultimoarray = valor.split("")[(valor.split("").length)-1]
//este if me funciona solo si las e estan al final necsito hacer que funcione cuando continue avanzando el array
    
 /* if((ultimoarray)=="e"){
        vorrado = kore.pop();
        nuevo = kore    .push("nter");
        
        cons("esto es en el array: " + kore );
    } */

    
    
// Este es el codigo que cambia los valores permanentemente, la verdad todavia no entiendo muy bien como funciona pero eso es en lo que me debo concentrar    
    kore = kore.map( x => x === "e" ? x="enter" : x === "i" ? x="imes": x==="a" ? x="ai": x==="o" ? x="ober" : x==="u" ? x="ufat": x);
    //esto debo pasarlo al modo desdencriptar
    //kore = kore.map( x => x === "enter" ? x="e" : x === "imes" ? x="i": x==="ai" ? x="a": x==="ober" ? x="o" : x==="ufat" ? x="u": x);


    cons(kore)//imprime el numero de objetos que tengo en mi array y que tiene
    var str = kore.join("");//convierte a kore a cadena de texto para que no se impriman las comas
    cons(str)//imprime a kore convertida a texto
    
    document.getElementById('Replica').innerHTML=' '+str;
    document.getElementById("oculto").value = " " + str;
    
   
    //esta es kore cuando ya fue completamente convertida y asi lo voy a pasar a la parte de encriptado para mostrarla al usuario
    
} 
function fundesencriptar(){
   
    valor2 = document.getElementById("encriptado").value
    kores = valor2.split("");
    kores = kores.join(" ");
    
    //el  .replace funciona por la palabra a cambiar despues sigue gm y por el valor por el que vas a cambiar
    str2 = valor2.replace(/enter/gm, "e").replace(/imes/gm, "i").replace(/ai/gm, "a").replace(/ober/gm, "o").replace(/ufat/gm, "u")

    cons(str2)

    document.getElementById("Replica2").innerHTML=" "+str2
    

   
}
/* var button = document.querySelector("button")
button.onclick = vamo;
function vamo(){
    Input = document.getElementById("Input1").value;
    es(Input);
}

sal(8) esta madre no se si usarla*/
/* window.addEventListener("keydown","ctrl+a", function(){
    cons("webos")
});
 */
var uwu = document.querySelectorAll("button");//selecciono los botones




//Boton De Copiar
function copiarxd(){
    textoacopy = document.getElementById('oculto')
    textoacopy.select();
    document.execCommand("copy");
    document.getElementById("copiado").style.visibility="visible";
}
var zi=0;
cons(uwu[zi].style)
uwu[zi].onmouseover=function(){
    cons("paso")
    uwu[zi].style.width = "75%";
    uwu[zi].style.fontSize = "0.9vw";
    uwu[zi].textContent = "Copiar Encriptado";
}
uwu[zi].onmouseleave=function(){
    cons("paso")
    uwu[zi].style.width = "auto";
    uwu[zi].style.fontSize = "1.4vw";
    uwu[zi].textContent = "-Ctrl + Y";
} 
uwu[zi].onclick=function(){
    copiarxd();
}


//Boton De Borrar
function borrar(){
        document.getElementById('Replica').textContent = " ";
        document.getElementById("entrada").outerHTML = "<textarea name='uwu' id='entrada' placeholder='Texto a Encriptar' onkeyup='escribir2()'></textarea>"
        document.getElementById("entrada").focus();
        document.getElementById('Replica2').textContent = " ";
        document.getElementById("encriptado").outerHTML = "<textarea name='desencriptar' id='encriptado' placeholder='Texto a Desencriptar' onkeyup='fundesencriptar()'></textarea>"
}
var cami=4;
cons(uwu[cami].style)
uwu[cami].onmouseover=function(){
    cons("paso")
    uwu[cami].style.width = "75%";
    uwu[cami].style.fontSize = "0.9vw";
    uwu[cami].textContent = "Borrar";
} 
uwu[cami].onmouseleave=function(){
    cons("paso")
    uwu[cami].style.width = "auto";
    uwu[cami].style.fontSize = "1.4vw";
    uwu[cami].textContent = "-Ctrl +alt+ M";
} 

uwu[cami].onclick = function(){
    borrar();
}
//Boton para modo de desencriptacion
function desencriptacion(){
        document.getElementById("encriptado").style.zIndex = 2
        document.getElementById("cont2").style.zIndex = 2
        document.getElementById("encriptado").focus();
        document.getElementById('Replica').textContent = " ";
        document.getElementById("entrada").outerHTML = "<textarea name='uwu' id='entrada' placeholder='Texto a Encriptar' onkeyup='escribir2()'></textarea>"
        document.getElementById("copiado").style.visibility="hidden";
}
var carn=1;
cons(uwu[carn].style)
uwu[carn].onmouseover=function(){
    cons("paso")
    uwu[carn].style.width = "75%";
    uwu[carn].style.fontSize = "0.9vw";
    uwu[carn].textContent = "Cambiar a Desencriptar";
} 
uwu[carn].onmouseleave=function(){
    cons("paso")
    uwu[carn].style.width = "auto";
    uwu[carn].style.fontSize = "1.4vw";
    uwu[carn].textContent = " - Ctrl + Q";
} 
uwu[carn].onclick = function (){
    desencriptacion();
}
//Boton para encriptacion
function encriptacion(){
    document.getElementById("encriptado").style.zIndex = -1
    document.getElementById("cont2").style.zIndex = -1
    document.getElementById("entrada").focus();
    document.getElementById('Replica2').textContent = " ";
    document.getElementById("encriptado").outerHTML = "<textarea name='desencriptar' id='encriptado' placeholder='Texto a Desencriptar' onkeyup='fundesencriptar()'></textarea>"
    document.getElementById("copiado").style.visibility="hidden";
}
var n=2;
cons(uwu[n].style)
uwu[n].onmouseover=function(){
    cons("paso")
    uwu[n].style.width = "75%";
    uwu[n].style.fontSize = "0.8vw";
    uwu[n].textContent = "Cambiar a Encriptar";
} 
uwu[n].onmouseleave=function(){
    cons("paso")
    uwu[n].style.width = "auto";
    uwu[n].style.fontSize = "1.4vw";
    uwu[n].textContent = " - Ctrl + B";
} 
uwu[n].onclick = function(){
    encriptacion();
}


//codigo para conseguir comandos de la pantalla
window.addEventListener("keypress", function(teclas){
    
    codinum = teclas.keyCode;
    ctrl = teclas.ctrlKey;
    alt = teclas;
    cons(codinum)
    if(codinum==17 && ctrl==true){
        desencriptacion();
    }
    if(codinum==2 && ctrl==true){
        encriptacion();
    }
    if(codinum==25 && ctrl==true){
        copiarxd();
    }
    if(codinum==28 && ctrl==true){
        borrar();
    }
    
})