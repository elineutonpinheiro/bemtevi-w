import { Aluno } from 'src/app/models/aluno.models';

export class Matricula {
  aluno: Aluno;
  turmaId: number;
  dataTermino: string;


  constructor(aluno: Aluno, turmaId: number, dataTermino: string) {
    this.aluno = aluno;
    this.turmaId = turmaId;
    this.dataTermino = dataTermino;
  }

}
