import MMaintenance from "../../db/Maintenance.js";

async function readMaintenance(params) {
    const listarMaintenance = await MMaintenance.find(params);
    return listarMaintenance;
}

export default readMaintenance;