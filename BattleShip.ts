

function Matriz1(): any {
    let matriz1: any =[
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
    return Matriz1()
}

function Matriz2():any {
    let matriz2:any = [
        [" ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        ["a", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["b", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["c", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["d", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["e", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["f", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["g", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["h", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["i", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
        ["j", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]
    ];
    return Matriz2
}

function imprimirMatriz1 (MatrizJ1: string[][]): void{
    for (let fila of MatrizJ1){
        console.log(fila.join("    "))
    }
}
function imprimirMatriz2 (MatrizJ2: String[][]):void {
    for (let fila of MatrizJ2){
        console.log(fila.join("    "))
    }
}

function ShipJ1(MatrizJ1: string [][]):void {
    const coorOcupadasJ1: any = []

    function cheakIfCoordOcupadas(coorOcupadasJ1: any, filaJ1: number, columnaJ1: number): boolean {
        for (let i = 0; i < coorOcupadasJ1.length; i++) {
            if (coorOcupadasJ1[i][0] === filaJ1 && coorOcupadasJ1[i][1] === columnaJ1) {
                return true; // Coordenadas ocupadas
            }
        }
        return false;
    }



        const coorJ1Fragata: any = [];
        let fila1J1Fragata1: number, columna1J1Fragata1: number;

        fila1J1Fragata1 = Math.floor(Math.random() * 10) + 1;
        columna1J1Fragata1 = Math.floor(Math.random() * 10) + 1;
        coorJ1Fragata.push(fila1J1Fragata1, columna1J1Fragata1);
        matrizJ1[fila1J1Fragata1][columna1J1Fragata1] = "X";
        coorOcupadasJ1.push([fila1J1Fragata1, columna1J1Fragata1]);

        const coorJ1Fragata2: any = [];
        let fila1J1Fragata2: number, columna1J1Fragata2: number;

        do {
            fila1J1Fragata2 = Math.floor(Math.random() * 10) + 1;
            columna1J1Fragata2 = Math.floor(Math.random() * 10) + 1;
            coorJ1Fragata2.push(fila1J1Fragata2, columna1J1Fragata2);
            matrizJ1[fila1J1Fragata2][columna1J1Fragata2] = "x";
            coorOcupadasJ1.push([fila1J1Fragata2, columna1J1Fragata2]);

            const coorJ1Destructor1: any = [];
            let fila1J1Destructor1: number, columna1J1Destructor1: number,
                fila2J1Destructor1: number, columna2J1Destructor1: number;

            do {
                fila1J1Destructor1 = Math.floor(Math.random() * 10) + 1;
                columna1J1Destructor1 = Math.floor(Math.random() * 10) + 1;
                coorJ1Destructor1.push(fila1J1Destructor1, columna1J1Destructor1);


                if (fila1J1Destructor1 + 1 <= 10) {
                    fila2J1Destructor1 = fila1J1Destructor1 + 1;
                    columna2J1Destructor1 = columna1J1Destructor1;
                    coorJ1Destructor1.push(fila2J1Destructor1, columna2J1Destructor1);
                    coorOcupadasJ1.push(fila1J1Destructor1,columna1J1Destructor1,fila2J1Destructor1,columna2J1Destructor1)
                    matrizJ1[fila1J1Destructor1][columna1J1Destructor1] = "D";
                } else if (fila1J1Destructor1 - 1 >= 10) {
                    fila2J1Destructor1 = fila1J1Destructor1 + 1;
                    columna2J1Destructor1 = columna1J1Destructor1;
                    coorJ1Destructor1.push(fila2J1Destructor1, columna2J1Destructor1);
                    coorOcupadasJ1.push(fila1J1Destructor1,columna1J1Destructor1,fila2J1Destructor1,columna2J1Destructor1)
                    matrizJ1[fila1J1Destructor1][columna1J1Destructor1] = "D";
                }
            } while (cheakIfCoordOcupadas(
                coorOcupadasJ1,
                fila1J1Destructor1,
                columna1J1Destructor1));

            const coorJ1Acorazado1: any = [];
            let fila1J1Acorazado1: number, columna1J1Acorazado1: number,
                fila2J1Acorazado1: number, columna2J1Acorazado1: number,
                fila3J1Acorazado1: number, columna3J1Acorazado1: number;

            do {
                fila1J1Acorazado1 = Math.floor(Math.random() * 10) + 1;
                columna1J1Acorazado1 = Math.floor(Math.random() * 10) + 1;
                coorJ1Acorazado1.push(fila1J1Acorazado1, columna1J1Acorazado1);
                coorOcupadasJ1.push(fila1J1Acorazado1, columna1J1Acorazado1)
                if (fila1J1Acorazado1 + 2 <= 10) {
                    fila2J1Acorazado1 = fila1J1Acorazado1 + 1;
                    fila3J1Acorazado1 = fila1J1Acorazado1 + 2;
                    columna2J1Acorazado1 = columna1J1Acorazado1;
                    columna3J1Acorazado1 = columna1J1Acorazado1;
                    coorJ1Acorazado1.push(
                        fila2J1Acorazado1,
                        columna2J1Acorazado1,
                        fila3J1Acorazado1,
                        columna3J1Acorazado1
                    );
                    MatrizJ1[fila1J1Acorazado1][columna1J1Acorazado1][fila2J1Acorazado1][columna2J1Acorazado1][fila3J1Acorazado1][columna3J1Acorazado1]
                    coorOcupadasJ1.push(fila1J1Acorazado1,columna1J1Destructor1,fila2J1Acorazado1,columna2J1Acorazado1,fila3J1Acorazado1, columna3J1Acorazado1)
                } else if (fila1J1Acorazado1 - 2 >= 1) {
                    fila2J1Acorazado1 = fila1J1Acorazado1 - 1;
                    fila3J1Acorazado1 = fila1J1Acorazado1 - 2;
                    columna2J1Acorazado1 = columna1J1Acorazado1;
                    columna3J1Acorazado1 = columna1J1Acorazado1;
                    coorJ1Acorazado1.push(
                        fila2J1Acorazado1,
                        columna2J1Acorazado1,
                        fila3J1Acorazado1,
                        columna3J1Acorazado1
                    );
                    MatrizJ1[fila1J1Acorazado1][columna1J1Acorazado1][fila2J1Acorazado1][columna2J1Acorazado1][fila3J1Acorazado1][columna3J1Acorazado1]
                    coorOcupadasJ1.push(fila1J1Acorazado1,columna1J1Destructor1,fila2J1Acorazado1,columna2J1Acorazado1,fila3J1Acorazado1, columna3J1Acorazado1)
                }
                const coorJ1Acorazado2: any = []
                let fila1J1Acorazado2: number, columna1J1Acorazado2: number,
                    fila2J1Acorazado2: number, columna2J1Acorazado2: number,
                    fila3J1Acorazado2: number, columna3J1Acorazado2: number;
                do {
                    fila1J1Acorazado2 = Math.floor(Math.random() * 10) + 1;
                    columna1J1Acorazado2 = Math.floor(Math.random() * 10) + 1;
                    coorJ1Acorazado1.push(
                        fila1J1Acorazado2,
                        columna1J1Acorazado2);


                    if (fila1J1Acorazado2 + 2 <= 10) {
                        fila2J1Acorazado2 = fila1J1Acorazado2 + 1;
                        fila3J1Acorazado2 = fila1J1Acorazado2 + 2;
                        columna2J1Acorazado2 = columna1J1Acorazado2;
                        columna3J1Acorazado2 = columna1J1Acorazado2;
                        coorJ1Acorazado2.push(
                            fila2J1Acorazado2,
                            columna2J1Acorazado2,
                            fila3J1Acorazado2,
                            columna3J1Acorazado2
                        );
                        MatrizJ1[fila1J1Acorazado2]


                        coorOcupadasJ1.push(fila1J1Acorazado2,
                            columna1J1Acorazado2,
                            fila2J1Acorazado2,
                            columna2J1Acorazado2,
                            fila3J1Acorazado2,
                            columna3J1Acorazado2)
                    } else if (fila1J1Acorazado2 - 2 >= 1) {
                        fila2J1Acorazado2 = fila1J1Acorazado2 - 1;
                        fila3J1Acorazado2 = fila1J1Acorazado2 - 2;
                        columna2J1Acorazado2 = columna1J1Acorazado2;
                        columna3J1Acorazado2 = columna1J1Acorazado2;
                        coorJ1Acorazado1.push(
                            fila2J1Acorazado2,
                            columna2J1Acorazado2,
                            fila3J1Acorazado2,
                            columna3J1Acorazado2
                        );
                    }

                }while(cheakIfCoordOcupadas(
                    coorOcupadasJ1,
                    fila1J1Acorazado2,
                    columna1J1Acorazado2));
            } while (cheakIfCoordOcupadas(
                coorOcupadasJ1,
                fila1J1Acorazado1,
                columna1J1Acorazado1));
        } while (cheakIfCoordOcupadas(
                coorOcupadasJ1,
                fila1J1Fragata2,
                columna1J1Fragata2));
    }


const matrizJ1:any = Matriz1()
const matrizJ2:any = Matriz2()
ShipJ1(matrizJ1)
imprimirMatriz1(matrizJ1)





