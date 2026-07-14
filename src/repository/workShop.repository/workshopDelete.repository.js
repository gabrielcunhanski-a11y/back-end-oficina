import MWorkshop from "../../db/Workshop.js";

async function deleteWorkshop(params) {
    const deleteWork = await MWorkshop.findByIdAndDelete(params);
    return deleteWork;
}

export default deleteWorkshop;