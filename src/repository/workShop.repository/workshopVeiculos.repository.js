import MWorkshop from "../../db/Workshop.js";
import MVeiculo from "../../db/Veiculo.js";

async function listarVeiculos(oficinaId) {
      const veiculoWork = await Veiculo.find({WorkshopId: oficinaId});
      return veiculoWork;
}

export default listarVeiculos;