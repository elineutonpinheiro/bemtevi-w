export interface Unidade {
  id: number;
  nome: string;
  endereco: {
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  };
  telefone: string;
  email: string;
  ativa: boolean;
  instituicaoId: number;

  /* constructor(id: number, nome: string, logradouro: string, numero: string, complemento: string, cep: string,
              bairro: string, cidade: string, estado: string, telefone: string, email: string, ativa: boolean, instituicaoId: number) {
      this.id = id;
      this.nome = nome;
      this.endereco.logradouro = logradouro;
      this.endereco.numero = numero;
      this.endereco.complemento = complemento;
      this.endereco.cep = cep;
      this.endereco.bairro = bairro;
      this.endereco.cidade = cidade;
      this.endereco.estado = estado;
      this.telefone = telefone;
      this.email = email;
      this.ativa = ativa;
      this.instituicaoId = instituicaoId;
  } */

}
