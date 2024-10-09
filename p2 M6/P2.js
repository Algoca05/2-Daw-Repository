let nombre = "";
let email = "";
let money = 0;

function registrationForm() {
    nombre = document.getElementById('name').value;
    email = document.getElementById('email').value;
    money = document.getElementById('money').value;

    console.log('Nombre:', nombre);
    console.log('Correo Electrónico:', email);
    console.log('Datos Bancarios:', money);
}
console.log(document.getElementById('submit'));
document.getElementById('submit').addEventListener('click', registrationForm,false);

