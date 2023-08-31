const calcularPromedio = (numeros) => {
    let sumaTotal = 0;

    // El bug se encontreba en el <= en la condición del bucle lo que hace que i llegue hasta numeros.length 
    // lo que deja en un indice fuera delos limites del array
    for (let i = 0; i < numeros.length; i++) {
    sumaTotal += numeros[i];
    }
    const promedio = sumaTotal / numeros.length;
    return promedio;
    };
    const listaNumeros = [1, 2, 3, 4, 5];
    const promedioNumeros = calcularPromedio(listaNumeros);

    console.log(promedioNumeros);