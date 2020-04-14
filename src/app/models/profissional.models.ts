export class Profissional {
  id: number;
  nome: string;
  cargo: string;
  email: string;
  senha: string;
  ativo: boolean;

  constructor(id: number, nome: string, cargo: string, email: string, senha: string, ativo: boolean) {
    this.id = id;
    this.nome = nome;
    this.cargo = cargo;
    this.email = email;
    this.senha = senha;
    this.ativo = ativo;
  }

}
