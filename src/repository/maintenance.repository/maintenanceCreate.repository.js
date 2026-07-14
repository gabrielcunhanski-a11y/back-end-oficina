import MMaintenance from "../../db/Maintenance.js";

async function createMaintenance(params) {
    const newMaintenance = await MMaintenance.insertOne(params);
    return newMaintenance;
}

export default createMaintenance;