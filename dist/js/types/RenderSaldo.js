import { formatarMoeda } from "../utils/formatters.js";
import Conta from "./Conta.js";
const elementoSaldo = document.querySelector('.saldo-valor .valor');
const RenderSaldo = {
    render() {
        if (elementoSaldo != null) {
            elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
        }
    }
};
export default RenderSaldo;
