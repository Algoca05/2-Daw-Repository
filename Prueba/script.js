


 
function cambioFuente(etiqueta){
    etiqueta.style.fontSize = "30px";
}
const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edat: 20,
    direcciones: [{ciudad: 'barcelona', pais: 'qwerty'}, {ciudad: 'total', pais: 'segundo'}],


}

let ciudades = "";
persona.direcciones.forEach(direcciones => {
    ciudades += (direcciones.ciudad + '<br>');
});
document.getElementById("demo").innerHTML= ciudades;