import MMaintenance from "../../db/Maintenance.js";

async function deleteMaintenance(params) {
    const delMaintenance = await MMaintenance.findByIdAndDelete(params);
    return delMaintenance;
}

export default deleteMaintenance;