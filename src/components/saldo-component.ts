import RenderData from "../types/RenderData.js"
import RenderSaldo from "../types/RenderSaldo.js"

const SaldoComponent = {
    atualizar() {
        RenderSaldo.render()
        RenderData.render()
    }
}

export default SaldoComponent
