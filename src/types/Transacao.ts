// Como estamos JS puro, é preciso colocar a extensão do arquivo.
// Em frameworks isto não é necessário já que isso "corrigido" por
// baixo dos panos.
import { TipoTransacao } from './TipoTransacao.js'

export type Transacao = {
    tipoTransacao: TipoTransacao
    valor: number
    data: Date
}