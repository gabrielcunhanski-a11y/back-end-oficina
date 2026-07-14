import MVeiculo from "../../db/Veiculo.js";

async function createVeiculo(params) {
    const createVeiculo = await MVeiculo.insertOne(params);
    return createVeiculo;
}

export default createVeiculo;