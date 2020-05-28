import { AnoLetivo } from './anoLetivo.models';
import { Unidade } from './unidade.models';
export interface Turma {
  id: number;
  nome: string;
  periodo: string;
  sala: string;
  ativa: boolean;
  unidadeId: number;
  anoLetivoId: number;

}
