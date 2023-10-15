
function matriz1():string[][] {
    let matriz1 :string[][]=[
        [" ", "1", "2", "3", "4", "5", "6", "7", "8","9","10"],
        ["A", "-", "-", "-", "-", "-", "-", "-", "-","-","-"],
        ["B", "-", "-", "-", "-", "-", "-", "-", "-","-","-"],
        ["C", "-", "-", "-", "-", "-", "-", "-", "-","-","-"],
        ["D", "-", "-", "-", "-", "-", "-", "-", "-","-","-"],
        ["E", "-", "-", "-", "-", "-", "-", "-", "-","-","-"],
        ["F", "-", "-", "-", "-", "-", "-", "-", "-","-","-"],
        ["G", "-", "-", "-", "-", "-", "-", "-", "-","-","-"],
        ["H", "-", "-", "-", "-", "-", "-", "-", "-","-","-"],
        ["I", "-", "-", "-", "-", "-", "-", "-", "-","-","-"],
        ["J", "-", "-", "-", "-", "-", "-", "-", "-","-","-"]
    ]
    return matriz1;
}
function matriz2():string[][] {
    let matriz2: string[][]=[
        [" ", "1", "2", "3", "4", "5", "6", "7", "8","9","10"],
        ["A", "-", "-", "-", "-", "-", "-", "-", "-","-","-"],
        ["B", "-", "-", "-", "-", "-", "-", "-", "-","-","-"],
        ["C", "-", "-", "-", "-", "-", "-", "-", "-","-","-"],
        ["D", "-", "-", "-", "-", "-", "-", "-", "-","-","-"],
        ["E", "-", "-", "-", "-", "-", "-", "-", "-","-","-"],
        ["F", "-", "-", "-", "-", "-", "-", "-", "-","-","-"],
        ["G", "-", "-", "-", "-", "-", "-", "-", "-","-","-"],
        ["H", "-", "-", "-", "-", "-", "-", "-", "-","-","-"],
        ["I", "-", "-", "-", "-", "-", "-", "-", "-","-","-"],
        ["J", "-", "-", "-", "-", "-", "-", "-", "-","-","-"]
    ]
    return matriz2;
}

function imprimirMatriz1 (matrizJ1): void{
    for (let fila of matrizJ1){
        console.log(fila.join("    "))
    }
}
function impromirMatriz2(matrizj2):void {
    for (let fila of matrizj2){
        console.log(fila.join("    "))
    }
}
function ShipJ1(matrizJ1):void {
    const coorOcupadasJ1: any = []

    function ShipsJ1(matrizJ1): any {

        const coorJ1Fragata: any = []
        let fila1J1Fragata1:number, columna1J1Fragata1:number

        fila1J1Fragata1 = Math.floor(Math.random() * 10) + 1;
        columna1J1Fragata1 = Math.floor(Math.random() * 10) + 1;
        coorJ1Fragata.push(fila1J1Fragata1, columna1J1Fragata1);
        matrizJ1[fila1J1Fragata1][columna1J1Fragata1] = "X"
        coorOcupadasJ1.push([fila1J1Fragata1, columna1J1Fragata1])

        const coorJ1Fragata2: any = []
        let fila1J1Fragata2:number,
            columna1J1Fragata2:number

        do {
            fila1J1Fragata2 = Math.floor(Math.random() * 10) + 1;
            columna1J1Fragata2 = Math.floor(Math.random() * 10) + 1;
            coorJ1Fragata2.push(fila1J1Fragata2, columna1J1Fragata2);
            matrizJ1[fila1J1Fragata2][columna1J1Fragata2] = "x"
            coorOcupadasJ1.push(fila1J1Fragata2, columna1J1Fragata2)

            const coorJ1Destructor1: any = []
            let fila1J1Destructor1:number, columna1J1Destructor1:number,
                fila2J1Destructor1:number, columna2J1Destructor1:number

            do {
                fila1J1Destructor1= Math.floor(Math.random()*10)+1
                columna1J1Destructor1=Math.floor(Math.random()*10)+1
                coorJ1Destructor1.push(fila1J1Destructor1,columna1J1Destructor1)
                if (fila1J1Destructor1 + 1 <=10){
                    fila2J1Destructor1 = fila1J1Destructor1 + 1
                    columna2J1Destructor1 = columna1J1Destructor1
                coorJ1Destructor1.push(fila2J1Destructor1, columna2J1Destructor1)
                } else if (fila1J1Destructor1 - 1 <= 10){

                }
                const coorJ1Acorazado1:any = []
                let fila1J1Acorazado1:number, columna1J1Acorazado1:number,
                    fila2J1Acorazado1:number, columna2J1Acorazado1:number,
                    fila3J1Acorazado1:number, columna3J1Acorazado1:number
            do {
                fila1J1Acorazado1 = Math.floor(Math.random()*10)+1
                columna1J1Acorazado1 = Math.floor(Math.random()*10)+1
                coorJ1Acorazado1.push(fila1J1Acorazado1,columna1J1Acorazado1)
                if (fila1B1J1 +2 <= 10) {
                    fila2J1Acorazado1 = fila1J1Acorazado1 +1;
                    fila3J1Acorazado1 = fila1J1Acorazado1 +2 ;
                    columna2J1Acorazado1 = columna1J1Acorazado1;
                    columna3J1Acorazado1 = columna1J1Acorazado1;
                    coorJ1Acorazado1.push(fila2J1Acorazado1, columna2J1Acorazado1, fila3J1Acorazado1, columna3J1Acorazado1);
                } else if (fila1J1Acorazado1 -2 >= 1) {
                    fila2J1Acorazado1 = fila1J1Acorazado1 -1;
                    fila3J1Acorazado1 = fila1J1Acorazado1 -2;
                    columna2J1Acorazado1 = columna1J1Acorazado1;
                    columna3J1Acorazado1 = columna1J1Acorazado1;
                    coorJ1Acorazado1.push(fila2J1Acorazado1, columna2J1Acorazado1, fila3J1Acorazado1, columna3J1Acorazado1);

                }
            }

            }while (cheakIfCoordOcupadas(coorOcupadasJ1,fila1J1Destructor1,columna1J1Destructor1,fila2J1Destructor1,columna2J1Destructor1))
        }while (cheakIfCoordOcupadas(coorOcupadasJ1,fila1J1Fragata2,columna1J1Fragata2))
    }
    function cheakIfCoordOcupadas(coorOcupadasJ1,filaJ1,columnaJ1) : boolean {
        for (let i =0;i <coorOcupadasJ1.length;i++){
            if (coorOcupadasJ1[i][0]=== filaJ1 && coorOcupadasJ1[i][i] === columnaJ1){
                return true //Coordenadas ocupadas
            }
        }
        return false //Coordenadas no ocupadas
    }
}





