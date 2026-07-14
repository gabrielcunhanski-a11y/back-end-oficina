import MMaintenance from "../../db/Maintenance.js";

async function updateMaintenance(id, uptadeData, options) {
    const putMaintenance = await MMaintenance.findByIdAndUpdate(id, uptadeData, options);
    return putMaintenance;
}

export default updateMaintenance;