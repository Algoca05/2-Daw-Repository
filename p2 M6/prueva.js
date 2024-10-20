function generarNumerosAleatoriosUnicos() {
    const numeros = new Set();
    while (numeros.size < 4) {
        const numeroAleatorio = Math.floor(Math.random() * preguntasJson.length);
        numeros.add(numeroAleatorio);
    }
    const [numero1, numero2, numero3, numero4] = [...numeros];
    return { numero1, numero2, numero3, numero4 };
}


console.log(numeros);