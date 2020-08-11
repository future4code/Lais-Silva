export abstract class Place {
    constructor(protected cep: string) {}
    
    public getCep(): string {
        return this.cep
    }
}
// não é possível criar instâncias 
// armazena e abstrai dados comuns 

// Place é uma classe porque precisa ter um 
// acesso restrito a um dos seus atributos, 
// o que é impossível de se fazer em interfaces.