import MWorkshop from "../../db/Workshop.js";

 async function createWorkshop(params) {
    const newWork = await MWorkshop.create(params);
    return newWork;
}

export default createWorkshop;
