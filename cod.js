/**
 * Función para inicializar matriz del jugador 1
 * @return matriz 1
 */
function matriz1 () {
    let matriz1 = [
        [" ", "1", "2", "3", "4", "5", "6", "7", "8"],
        ["A", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["B", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["C", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["D", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["E", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["F", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["G", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["H", "-", "-", "-", "-", "-", "-", "-", "-"]
    ]

    return matriz1;
};

/**
 * Función para inicializar matriz del jugador 2
 * @returns matriz2
 */
function matriz2 () {
    let matriz2 = [
        [" ", "1", "2", "3", "4", "5", "6", "7", "8"],
        ["A", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["B", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["C", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["D", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["E", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["F", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["G", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["H", "-", "-", "-", "-", "-", "-", "-", "-"]
    ]

    return matriz2;
};


/**
 * Función para imprimir matriz 1 en el formato correcto
 */
function imprimirMatriz1 (matrizJug1) {
    /**
     * Estructura for..of para recorrer la matriz del jugador 1 e imprimirla en formato correcto
     */
    for (let fila of matrizJug1){
        console.log(fila.join("   "));
    };
};

/**
 * Función para imprimir matriz 2 en el formato correcto
 */
function imprimirMatriz2 (matrizJug2) {
    /**
     * Estructura for..of para recorrer la matriz del jugador 2 e imprimirla en formato correcto
     */
    for (let fila of matrizJug2) {
        console.log(fila.join("   ")); // Une cada elemento de las filas con espacios en blanc
    };
};

/**
 * Función para ubicar aleatoriamente los barcos del jugador 1
 */
function barcosJug1 (matrizJug1) {
    // S inicializa un array con las coordenadas ya ocupadas
    const coordOcupadas = [];
    // Se inicializa un array para almacenar las coordenadas del barco # 1
    const coordenadasJ1B1 = [];
    let fila1B1J1, columna1B1J1,
        fila2B1J1, columna2B1J1,
        fila3B1J1, columna3B1J1;
    /**
     * Bloque para generar las coordenadas del primer barco
     * Se generan pares de numeros que funcionan como coordenadas
     */
    fila1B1J1 = Math.floor(Math.random() * 8) + 1; // Rango válido: 1-8
    columna1B1J1 = Math.floor(Math.random() * 8) + 1; // Rango válido: 1-8
    // Se agrega al array de coordenadas
    coordenadasJ1B1.push(fila1B1J1, columna1B1J1);
    /**
     * Generar las siguientes coordenadas
     * Se verifica que sean coordenadas coherentes a la primera
     */
    if (fila1B1J1 +2 <= 8) {
        fila2B1J1 = fila1B1J1 +1;
        fila3B1J1 = fila1B1J1 +2 ;
        columna2B1J1 = columna1B1J1;
        columna3B1J1 = columna1B1J1;
        coordenadasJ1B1.push(fila2B1J1, columna2B1J1, fila3B1J1, columna3B1J1);
    } else if (fila1B1J1 -2 >= 1) {
        fila2B1J1 = fila1B1J1 -1;
        fila3B1J1 = fila1B1J1 -2;
        columna2B1J1 = columna1B1J1;
        columna3B1J1 = columna1B1J1;
        coordenadasJ1B1.push(fila2B1J1, columna2B1J1, fila3B1J1, columna3B1J1);

    }

    // Se ubica el barco en la matriz del jugador 1
    matrizJug1[fila1B1J1][columna1B1J1] = "X";
    matrizJug1[fila2B1J1][columna2B1J1] = "X";
    matrizJug1[fila3B1J1][columna3B1J1] = "X";
    coordOcupadas.push([fila1B1J1, columna1B1J1], [fila2B1J1, columna2B1J1], [fila3B1J1, columna3B1J1]);

    // Se inicicia un array para almacenar las coordenadas del barco # 2
    const coordenadasJ1B2 = [];
    // Se inician las variables de las coordenadas del barco #2
    let fila1B2J1, columna1B2J1,
        fila2B2J1U, fila2B2J1D,
        columna2B2J1, fila3B2J1U,
        fila3B2J1D, columna3B2J1,
        fila4B2J1U, fila4B2J1D,
        columna4B2J1;

    /**
     * Bloque para generar las coordenadas del primer barco
     * Se generan pares de numeros que funcionan como coordenadas
     */
    do {
        fila1B2J1 = Math.floor(Math.random() * 8) + 1; // Rango válido: 1-8
        columna1B2J1 = Math.floor(Math.random() * 8) + 1; // Rango válido: 1-8

        if (fila1B2J1 + 4 <= 8) {
            fila2B2J1D = fila1B2J1 + 1;
            fila3B2J1D = fila1B2J1 + 2;
            fila4B2J1D = fila1B2J1 + 3;
            columna2B2J1 = columna1B2J1;
            columna3B2J1 = columna1B2J1;
            columna4B2J1 = columna1B2J1;
        } else if (fila1B2J1 - 4 >= 1) {
            fila2B2J1U = fila1B2J1 - 1;
            fila3B2J1U = fila1B2J1 - 2;
            fila4B2J1U = fila1B2J1 - 3;
            columna2B2J1 = columna1B2J1;
            columna3B2J1 = columna1B2J1;
            columna4B2J1 = columna1B2J1;
        }
        /**
         * El barco estara en posición vertical, por lo cual tiene dos opciones
         *      Hacia abajo de la primera coordenada (fila+4)
         *      Hacia arriba de la primera coordenada(fila-4)
         */

        if (
            (fila1B2J1 + 4 <= 8 &&
                // Se valida que en la posición no haya un barco ya
                matrizJug1[fila1B2J1][columna1B2J1] !== "X" &&
                matrizJug1[fila2B2J1D][columna2B2J1] !== "X" &&
                matrizJug1[fila3B2J1D][columna3B2J1] !== "X" &&
                matrizJug1[fila4B2J1D][columna4B2J1] !== "X") ||
            (fila1B2J1 - 4 >= 1 &&
                matrizJug1[fila1B2J1][columna1B2J1] !== "X" &&
                matrizJug1[fila2B2J1U][columna2B2J1] !== "X" &&
                matrizJug1[fila3B2J1U][columna3B2J1] !== "X" &&
                matrizJug1[fila4B2J1U][columna4B2J1] !== "X")
        ) {
            if (fila1B2J1 + 4 <= 8) {
                // Si laultima coordenada entra en la matri significa que si se puede ubicar
                matrizJug1[fila1B2J1][columna1B2J1] = "F";
                matrizJug1[fila2B2J1D][columna2B2J1] = "F";
                matrizJug1[fila3B2J1D][columna3B2J1] = "F";
                matrizJug1[fila4B2J1D][columna4B2J1] = "F";
            } else {
                matrizJug1[fila1B2J1][columna1B2J1] = "F";
                matrizJug1[fila2B2J1U][columna2B2J1] = "F";
                matrizJug1[fila3B2J1U][columna3B2J1] = "F";
                matrizJug1[fila4B2J1U][columna4B2J1] = "F";
            }
            break;
        }
    } while (matrizJug1[fila1B2J1][columna1B2J1] == "X" && true)






}


/**
 * Asigna la matriz retornada de la funcion matriz1 a una variable
 */
const matrizJug1 = matriz1();
/**
 * Asigna la matriz retornada de la funcion matriz2 a una variable
 */
const matrizJug2 = matriz2();
barcosJug1(matrizJug1);
imprimirMatriz1(matrizJug1);
