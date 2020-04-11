export class Lotacao {
  turmaId: number;
  profissionalId: number;
  dataInicio: Date;
  dataTermino: Date;

  constructor(turmaId: number, profissionalId: number, dataInicio: Date, dataTermino: Date) {
    this.turmaId = turmaId;
    this.profissionalId = profissionalId;
    this.dataInicio = dataInicio;
    this.dataTermino = dataTermino;
  }

}
