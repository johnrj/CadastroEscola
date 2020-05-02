import { Turma } from "./turma.model";

export interface Escola {
    id: string,
    nome: string,
    endereco: string,
    turmas: Turma[]
}