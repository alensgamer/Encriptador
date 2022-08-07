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
    document.getElementById('Replica').innerHTML=' '+valor
    
    //Mis valores
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










