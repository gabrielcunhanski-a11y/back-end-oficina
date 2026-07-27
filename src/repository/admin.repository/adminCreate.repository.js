import MAdmin from "../../db/Admin.js";

async function createAdmin(params) {
    const newAdmin = await MAdmin.create(params);
    return newAdmin;
}

export default createAdmin;