import MVeiculos from "../../db/Veiculo.js";

async function readVeiculo(params) {
    const readVeiculos = await MVeiculos.find(params);
    return readVeiculos;
}

export default readVeiculo;