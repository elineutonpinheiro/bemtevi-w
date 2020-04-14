import { Responsavel } from './responsavel.models';
export class Aluno {
  id: number;
  nome: string;
  dataNascimento: string;
  responsavel: Responsavel;
  ativo: boolean;


  constructor(id: number, nome: string, dataNascimento: string, responsavel: Responsavel, ativo: boolean) {
    this.id = id;
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.responsavel = responsavel;
    this.ativo = ativo;
  }

}
