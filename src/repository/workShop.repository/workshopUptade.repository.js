import MWorkshop from "../../db/Workshop.js";

async function updateWorkshop(id, updateData, options) {
    const updateWork = await MWorkshop.findByIdAndUpdate(id, updateData, options);
    return updateWork;
}

export default updateWorkshop;