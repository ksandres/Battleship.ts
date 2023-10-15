function matriz1() {
    var matriz1 = [
        [" ", "1", "2", "3", "4", "5", "6", "7", "8"],
        ["A", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["B", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["C", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["D", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["E", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["F", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["G", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["H", "-", "-", "-", "-", "-", "-", "-", "-"]
    ];
    return matriz1;
}
function matriz2() {
    var matriz2 = [
        [" ", "1", "2", "3", "4", "5", "6", "7", "8"],
        ["A", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["B", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["C", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["D", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["E", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["F", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["G", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["H", "-", "-", "-", "-", "-", "-", "-", "-"]
    ];
    return matriz2;
}
function imprimirMatriz1(matrizJug1) {
    for (var _i = 0, matrizJug1_1 = matrizJug1; _i < matrizJug1_1.length; _i++) {
        var fila = matrizJug1_1[_i];
        console.log(fila.join("   "));
    }
}
function imprimirMatriz2(matrizJug2) {
    for (var _i = 0, matrizJug2_1 = matrizJug2; _i < matrizJug2_1.length; _i++) {
        var fila = matrizJug2_1[_i];
        console.log(fila.join("   "));
    }
}
function barcosJug1(matrizJug1) {
    var coordOcupadas = [];
    var coordenadasJ1B1 = [];
    var fila1B1J1, columna1B1J1, fila2B1J1, columna2B1J1, fila3B1J1, columna3B1J1;
    var fila1B2J1, columna1B2J1, fila2B2J1D, fila3B2J1D, fila4B2J1D, columna2B2J1, columna3B2J1, columna4B2J1;
    var fila2B2J1U, fila3B2J1U, fila4B2J1U;
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
        }
        else if (fila1B2J1 - 4 >= 1) {
            fila2B2J1U = fila1B2J1 - 1;
            fila3B2J1U = fila1B2J1 - 2;
            fila4B2J1U = fila1B2J1 - 3;
            columna2B2J1 = columna1B2J1;
            columna3B2J1 = columna1B2J1;
            columna4B2J1 = columna1B2J1;
        }
        if ((fila1B2J1 + 4 <= 8 &&
            matrizJug1[fila1B2J1][columna1B2J1] !== "X" &&
            matrizJug1[fila2B2J1D][columna2B2J1] !== "X" &&
            matrizJug1[fila3B2J1D][columna3B2J1] !== "X" &&
            matrizJug1[fila4B2J1D][columna4B2J1] !== "X")
            || (fila1B2J1 - 4 >= 1 &&
                matrizJug1[fila1B2J1][columna1B2J1] !== "X" &&
                matrizJug1[fila2B2J1U][columna2B2J1] !== "X" &&
                matrizJug1[fila3B2J1U][columna3B2J1] !== "X" &&
                matrizJug1[fila4B2J1U][columna4B2J1] !== "X")) {
            if (fila1B2J1 + 4 <= 8) {
                // Si la última coordenada entra en la matriz, significa que se puede ubicar
                matrizJug1[fila1B2J1][columna1B2J1] = "F";
                matrizJug1[fila2B2J1D][columna2B2J1] = "F";
                matrizJug1[fila3B2J1D][columna3B2J1] = "F";
                matrizJug1[fila4B2J1D][columna4B2J1] = "F";
            }
            else {
                matrizJug1[fila1B2J1][columna1B2J1] = "F";
                matrizJug1[fila2B2J1U][columna2B2J1] = "F";
                matrizJug1[fila3B2J1U][columna3B2J1] = "F";
                matrizJug1[fila4B2J1U][columna4B2J1] = "F";
            }
            break;
        }
    } while (matrizJug1[fila1B2J1][columna1B2J1] === "X");
    var matrizJug2 = matriz2();
    imprimirMatriz1(matrizJug1);
    console.log("Barcos ubicados en la matriz");
}
