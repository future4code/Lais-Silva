type pokemon = {
	name: string,
  types: string,
	healthPoints: number
};

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
};

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
};

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
};

// a. Usando o comando tsc, um arquivo js é criado a partir do arquivo ts atual. 
// b. Fora da pasta src, o comando deve ser realizado com indicação do arquivo que sera
// transpilado. Dentro de uma pasta src, o comando tsc pode ser dado na pasta raiz.
// c. O tsc sem parâmetros ou com vários parâmetros pode transpilar vários arquivos ts juntos. 
// d. O tsconfig criado com tsc --int parece ter todas as possibilidades de configuração para
// a transpilação. A "variável" forceConsistentCasingInFileNames me saltou os olhos pois
// como dito em aula, pode resolver bugs gerados por declaração incoerente com o restante do código. 