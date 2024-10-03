export class Atividade {
    id: number;
    nome: string;
    descricao: string;
    tempo: number;

    constructor(id: number, nome: string, descricao: string, tempo: number){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.tempo = tempo;
    }
}
