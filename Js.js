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
document.querySelector("textarea").focus;
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

    kore2 = document.getElementById("encriptado").innerHTML=" "+kore.join("");
// Este es el codigo que cambia los valores permanentemente, la verdad todavia no entiendo muy bien como funciona pero eso es en lo que me debo concentrar    
    kore = kore.map( x => x === "e" ? x="enter" : x === "i" ? x="imes": x==="a" ? x="ai": x==="o" ? x="ober" : x==="u" ? x="ufat": x);
    //esto debo pasarlo al modo desdencriptar
    //kore = kore.map( x => x === "enter" ? x="e" : x === "imes" ? x="i": x==="ai" ? x="a": x==="ober" ? x="o" : x==="ufat" ? x="u": x);


    cons(kore)//imprime el numero de objetos que tengo en mi array y que tiene
    var str = kore.join("");//convierte a kore a cadena de texto para que no se impriman las comas
    cons( "str xd : " +str)//imprime a kore convertida a texto
    
    document.getElementById('Replica').innerHTML=' '+str
    //esta es kore cuando ya fue completamente convertida y asi lo voy a pasar a la parte de encriptado para mostrarla al usuario
    
} 

function fundesencriptar(){
    cons("entraste a desencriptar")
    valor2 = document.getElementById("encriptado").value
    kores = valor2.split(" ");
    kores = kores.join(" ");

    str2 = kores.replace(/enter/gm, "e").replace(/imes/gm, "i");

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
var uwu = document.querySelectorAll("button");


//Boton De Copiar
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
    uwu[zi].textContent = "-Ctrl +alt+ J";
} 


//Boton De Borrar
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
    document.getElementById('Replica').textContent = " ";
    cons(document.getElementById("entrada").outerHTML)
    document.getElementById("entrada").outerHTML = "     <textarea name='uwu' id='entrada' placeholder='Texto a Encriptar/Desencriptar' onkeyup='escribir2()'></textarea>"
}


//Boton para modo de encriptacion
var carn=1;
cons(uwu[carn].style)
uwu[carn].onmouseover=function(){
    cons("paso")
    uwu[carn].style.width = "75%";
    uwu[carn].style.fontSize = "0.9vw";
    uwu[carn].textContent = "Cambiar modo";
} 
uwu[carn].onmouseleave=function(){
    cons("paso")
    uwu[carn].style.width = "auto";
    uwu[carn].style.fontSize = "1.4vw";
    uwu[carn].textContent = "-Ctrl +alt+ K";
} 

//codigo para conseguir comandos de la pantalla
window.addEventListener("keypress", function(teclas){
    cons(teclas.keyCode)
})