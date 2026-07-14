import MVeiculo from "../../db/Veiculo.js";

async function deleteVeiculo(params) {
    const delVeiculo = await MVeiculo.findByIdAndDelete(params);
    return delVeiculo;
}

export default deleteVeiculo;