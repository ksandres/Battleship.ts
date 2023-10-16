function matriz1() {
    let matriz1 = [
        [" ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        ["A", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["B", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["C", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["D", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["E", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["F", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["G", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["H", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["I", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["J", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]
    ];
    return matriz1;
}
function matriz2() {
    let matriz2 = [
        [" ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        ["A", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["B", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["C", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["D", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["E", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["F", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["G", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["H", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["I", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["J", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]
    ];
    return matriz2;
}
function imprimirMatriz1(matrizJ1) {
    for (let fila of matrizJ1) {
        console.log(fila.join("    "));
    }
}
function impromirMatriz2(matrizj2) {
    for (let fila of matrizj2) {
        console.log(fila.join("    "));
    }
}
function ShipJ1(matrizJ1) {
    const coorOcupadasJ1 = [];
    function cheakIfCoordOcupadas(coorOcupadasJ1, filaJ1, columnaJ1) {
        for (let i = 0; i < coorOcupadasJ1.length; i++) {
            if (coorOcupadasJ1[i][0] === filaJ1 && coorOcupadasJ1[i][1] === columnaJ1) {
                return true; // Coordenadas ocupadas
            }
        }
        return false;
    }
    function ShipsJ1(matriz1J1) {
        const coorJ1Fragata = [];
        let fila1J1Fragata1, columna1J1Fragata1;
        fila1J1Fragata1 = Math.floor(Math.random() * 10) + 1;
        columna1J1Fragata1 = Math.floor(Math.random() * 10) + 1;
        coorJ1Fragata.push(fila1J1Fragata1, columna1J1Fragata1);
        matrizJ1[fila1J1Fragata1][columna1J1Fragata1] = "X";
        coorOcupadasJ1.push([fila1J1Fragata1, columna1J1Fragata1]);
        const coorJ1Fragata2 = [];
        let fila1J1Fragata2, columna1J1Fragata2;
        do {
            fila1J1Fragata2 = Math.floor(Math.random() * 10) + 1;
            columna1J1Fragata2 = Math.floor(Math.random() * 10) + 1;
            coorJ1Fragata2.push(fila1J1Fragata2, columna1J1Fragata2);
            matrizJ1[fila1J1Fragata2][columna1J1Fragata2] = "x";
            coorOcupadasJ1.push([fila1J1Fragata2, columna1J1Fragata2]);
            const coorJ1Destructor1 = [];
            let fila1J1Destructor1, columna1J1Destructor1, fila2J1Destructor1, columna2J1Destructor1;
            do {
                fila1J1Destructor1 = Math.floor(Math.random() * 10) + 1;
                columna1J1Destructor1 = Math.floor(Math.random() * 10) + 1;
                coorJ1Destructor1.push(fila1J1Destructor1, columna1J1Destructor1);
                if (fila1J1Destructor1 + 1 <= 10) {
                    fila2J1Destructor1 = fila1J1Destructor1 + 1;
                    columna2J1Destructor1 = columna1J1Destructor1;
                    coorJ1Destructor1.push(fila2J1Destructor1, columna2J1Destructor1);
                    coorOcupadasJ1.push(fila1J1Destructor1, columna1J1Destructor1, fila2J1Destructor1, columna2J1Destructor1);
                }
                else if (fila1J1Destructor1 - 1 >= 10) {
                    fila2J1Destructor1 = fila1J1Destructor1 + 1;
                    columna2J1Destructor1 = columna1J1Destructor1;
                    coorJ1Destructor1.push(fila2J1Destructor1, columna2J1Destructor1);
                    coorOcupadasJ1.push(fila1J1Destructor1, columna1J1Destructor1, fila2J1Destructor1, columna2J1Destructor1);
                }
            } while (cheakIfCoordOcupadas(coorOcupadasJ1, fila1J1Destructor1, columna1J1Destructor1));
            const coorJ1Acorazado1 = [];
            let fila1J1Acorazado1, columna1J1Acorazado1, fila2J1Acorazado1, columna2J1Acorazado1, fila3J1Acorazado1, columna3J1Acorazado1;
            do {
                fila1J1Acorazado1 = Math.floor(Math.random() * 10) + 1;
                columna1J1Acorazado1 = Math.floor(Math.random() * 10) + 1;
                coorJ1Acorazado1.push(fila1J1Acorazado1, columna1J1Acorazado1);
                if (fila1J1Acorazado1 + 2 <= 10) {
                    fila2J1Acorazado1 = fila1J1Acorazado1 + 1;
                    fila3J1Acorazado1 = fila1J1Acorazado1 + 2;
                    columna2J1Acorazado1 = columna1J1Acorazado1;
                    columna3J1Acorazado1 = columna1J1Acorazado1;
                    coorJ1Acorazado1.push(fila2J1Acorazado1, columna2J1Acorazado1, fila3J1Acorazado1, columna3J1Acorazado1);
                    coorOcupadasJ1.push(fila1J1Acorazado1, columna1J1Destructor1, fila2J1Acorazado1, columna2J1Acorazado1, fila3J1Acorazado1, columna3J1Acorazado1);
                }
                else if (fila1J1Acorazado1 - 2 >= 1) {
                    fila2J1Acorazado1 = fila1J1Acorazado1 - 1;
                    fila3J1Acorazado1 = fila1J1Acorazado1 - 2;
                    columna2J1Acorazado1 = columna1J1Acorazado1;
                    columna3J1Acorazado1 = columna1J1Acorazado1;
                    coorJ1Acorazado1.push(fila2J1Acorazado1, columna2J1Acorazado1, fila3J1Acorazado1, columna3J1Acorazado1);
                }
                const coorJ1Acorazado2 = [];
                let fila1J1Acorazado2, columna1J1Acorazado2, fila2J1Acorazado2, columna2J1Acorazado2, fila3J1Acorazado2, columna3J1Acorazado2;
                do {
                    fila1J1Acorazado2 = Math.floor(Math.random() * 10) + 1;
                    columna1J1Acorazado2 = Math.floor(Math.random() * 10) + 1;
                    coorJ1Acorazado1.push(fila1J1Acorazado2, columna1J1Acorazado2);
                    if (fila1J1Acorazado2 + 2 <= 10) {
                        fila2J1Acorazado2 = fila1J1Acorazado2 + 1;
                        fila3J1Acorazado2 = fila1J1Acorazado2 + 2;
                        columna2J1Acorazado2 = columna1J1Acorazado2;
                        columna3J1Acorazado2 = columna1J1Acorazado2;
                        coorJ1Acorazado2.push(fila2J1Acorazado2, columna2J1Acorazado2, fila3J1Acorazado2, columna3J1Acorazado2);
                        coorOcupadasJ1.push(fila1J1Acorazado2, columna1J1Acorazado2, fila2J1Acorazado2, columna2J1Acorazado2, fila3J1Acorazado2, columna3J1Acorazado2);
                    }
                    else if (fila1J1Acorazado2 - 2 >= 1) {
                        fila2J1Acorazado2 = fila1J1Acorazado2 - 1;
                        fila3J1Acorazado2 = fila1J1Acorazado2 - 2;
                        columna2J1Acorazado2 = columna1J1Acorazado2;
                        columna3J1Acorazado2 = columna1J1Acorazado2;
                        coorJ1Acorazado1.push(fila2J1Acorazado2, columna2J1Acorazado2, fila3J1Acorazado2, columna3J1Acorazado2);
                    }
                } while (cheakIfCoordOcupadas(coorOcupadasJ1, fila1J1Acorazado2, columna1J1Acorazado2));
            } while (cheakIfCoordOcupadas(coorOcupadasJ1, fila1J1Acorazado1, columna1J1Acorazado1));
        } while (cheakIfCoordOcupadas(coorOcupadasJ1, fila1J1Fragata2, columna1J1Fragata2));
    }
}
const matrizJ1 = matriz1();
const matrizJ2 = matriz2();
ShipJ1(matrizJ1);
imprimirMatriz1(matrizJ1);
