export enum Color { //las enumeraciones es trabajar con numeracion de posicion pero en vez de numeros es con palabras. Es decir rojo va a ser 0, negro 1, azul 2 y verde 3
    rojo, negro, azul, verde
}


export interface Heroe {
    nombre: string;
    vuela: boolean;
    color: Color;
}