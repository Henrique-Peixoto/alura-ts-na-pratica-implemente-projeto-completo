import { formatarData } from "../utils/formatters.js"
import Conta from "./Conta.js"
import { FormatoData } from "./FormatoData.js"

const elementoDataAcesso = document.querySelector('.block-saldo time') as HTMLElement

const RenderData = {
    render() {
        if (elementoDataAcesso != null) {
            elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO)
        }
    }
}

export default RenderData
