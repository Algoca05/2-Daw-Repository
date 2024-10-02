
function compare(){
    let texto1 = document.getElementById("texto1").value;
    let texto2 = document.getElementById("texto2").value;
    if (texto1 == texto2){
        document.getElementById("=").innerHTML = "=";
    }else{
        document.getElementById("=").innerHTML = "!=";
    }
}
document.getElementById("texto1").addEventListener("keyup", compare, false);

document.getElementById("texto2").addEventListener("keyup", compare, false);





function count(){
    let counter = document.getElementById("textoCount").value;
    let number = counter.length 
    document.getElementById("countNumber").innerHTML = number;

}

document.getElementById("textoCount").addEventListener("keyup", count, false);



function operation(){
    let number = document.getElementById("numberOperation").value;
    let raiz = Math.sqrt(number).toFixed(2);
    
    document.getElementById("operationResult").innerHTML = raiz;
}
document.getElementById("numberOperation").addEventListener("keyup", operation, false);


function change(){
    if (document.getElementById("verde").checked  ){
        document.getElementById("header").style.backgroundColor = "green";
        document.getElementById("footer").style.backgroundColor = "green";
    }
    else if (document.getElementById("azul").checked  ){
        document.getElementById("header").style.backgroundColor = "blue";
        document.getElementById("footer").style.backgroundColor = "blue";
    }
    else if (document.getElementById("rojo").checked  ){
        document.getElementById("header").style.backgroundColor = "red";
        document.getElementById("footer").style.backgroundColor = "red";
    }
}

document.getElementById("verde").addEventListener("click", change, false);
document.getElementById("azul").addEventListener("click", change, false);
document.getElementById("rojo").addEventListener("click", change, false);

/*cambiar la palabra del adivina la palabra */
let word ="haber";
let tamaño=0;
function rerandom(){
    
    const wordArray = ["haber", "gracias", "veces","television","cuca","anime","coche","supercalifragilisticoespialidoso"];
    let numeroPalabras = wordArray.length;
    let random = Math.trunc(Math.random()*numeroPalabras);
    word = wordArray[random];
    tamaño = word.length;
    document.getElementById("tamaño").innerHTML ="La palabra tiene "+tamaño+" letras";
    document.getElementById("textoRandom").maxLength= tamaño;

}
document.getElementById("buttonRandom").addEventListener("click", rerandom, false);

function random(){
    let palabraRecibida = document.getElementById("textoRandom").value;
    let numberLength = palabraRecibida.length ;
    let correct = 0;
    let palabraDada = word;
    console.log(palabraDada);

for (var i = 0; i<numberLength; i++){
    if (palabraDada[i]== palabraRecibida[i]){
        correct++;
        
    }
}
if(numberLength == palabraDada.length && palabraDada == palabraRecibida){
    document.getElementById("randomNumber").innerHTML ="Felicidades has acertado la palabra";

}
else {
    document.getElementById("randomNumber").innerHTML ="Has acertado "+ correct +" letras";

}
}
document.getElementById("textoRandom").addEventListener("keyup", random, false);



function plus(){
    let texto1 = document.getElementById("texto1Conc").value;
    let texto2 = document.getElementById("texto2Conc").value;
    let concatenar = texto1 +" "+ texto2;
        document.getElementById("concatenado").innerHTML = concatenar;

}
document.getElementById("texto1Conc").addEventListener("keyup", plus, false);

document.getElementById("texto2Conc").addEventListener("keyup", plus, false);



function pxWidth(){
    let nuevoAncho = document.getElementById("widthInput").value;
     
   if (nuevoAncho>250){
    nuevoAncho = 250;
   }
    nuevoAncho += "px";     
    if (nuevoAncho !=  document.getElementById("imagen").style.width) {
        
         
         
        document.getElementById("imagen").style.width = nuevoAncho;
        document.getElementById("imagen").style.height ="auto";
        document.getElementById("heigthInput").value= document.getElementById("imagen").offsetHeight;
       document.getElementById("widthInput").value= document.getElementById("imagen").offsetWidth;
    }
}
function pxHeigth(){
    let nuevoAlto = document.getElementById("heigthInput").value;
    if (nuevoAlto>350){
        nuevoAlto = 350;
       }
    nuevoAlto += "px";
   
    
if (nuevoAlto!=  document.getElementById("imagen").style.height) {
    
    
     
    document.getElementById("imagen").style.height = nuevoAlto;
    document.getElementById("imagen").style.width ="auto";
    document.getElementById("widthInput").value= document.getElementById("imagen").offsetWidth;
    document.getElementById("heigthInput").value= document.getElementById("imagen").offsetHeight;
}
}
document.getElementById("widthInput").addEventListener("change", pxWidth, false);
document.getElementById("heigthInput").addEventListener("change", pxHeigth, false);

