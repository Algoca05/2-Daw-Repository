<?php

sesion_start();

$_SESSION['nombre'] = 'Juan';
$_SESSION['email'] = 'juan@exzmple.com';


echo "Sesión iniciada con el nombre: {$_SESSION['nombre']} y el email: {$_SESSION['email']}";


>