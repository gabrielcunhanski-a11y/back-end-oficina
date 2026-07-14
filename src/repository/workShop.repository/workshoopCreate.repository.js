import MWorkshop from "../../db/Workshop.js";

 async function createWorkshop(params) {
    const newWork = await MWorkshop.insertOne(params);
    return newWork;
}

export default createWorkshop
