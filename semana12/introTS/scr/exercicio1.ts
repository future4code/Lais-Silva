import { string } from "prop-types"

const minhaString: string = "string" ;
const meuNumero: number = 5 ;

type person = {
    name: string,
    age: number,
    color: string
};
const laura: person = {
    name: "laura",
    age: 30,
    color: "blue"
};
const ana: person = {
    name: "ana",
    age: 30,
    color: "pink"
};
const lais: person = {
    name: "lais",
    age: 25,
    color: "black"
};

enum RAINBOWCOLORS {
    GREEN = 'green',
    BLUE = 'blue',
    VIOLET = "violet",
    YELLOW = "yellow",
    ORANGE = "orange",
    RED = "red",
    INDIGO = "indigo"
}

const goli: person = {
    name: "goli",
    age: 24,
    color: RAINBOWCOLORS.YELLOW
} 

