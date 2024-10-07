document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const talent = document.getElementById('talent').value;
    
    if (name && email && talent) {
        document.getElementById('message').textContent = '¡Registro exitoso! Gracias por participar.';
    } else {
        document.getElementById('message').textContent = 'Por favor, completa todos los campos.';
    }
});
