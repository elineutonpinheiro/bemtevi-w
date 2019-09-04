export class Unidade {
  id: number;
  nome: string;
  endereco: {
    logradouro: string;
    numero: string;
    complemento: string;
    cep: string;
    bairro: string;
    cidade: string;
    estado: string;
  };
  contato: {
    telefone: string;
    email: string;
  };
  turmas: number;
  profissionais: number;
  alunos: number;
  ativa: boolean;
}
