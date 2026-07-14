import MWorkshop from "../../db/Workshop.js";

async function listarWorkshop(params) {
     const listarWork = await MWorkshop.find(params);
     return listarWork;
}

export default listarWorkshop;