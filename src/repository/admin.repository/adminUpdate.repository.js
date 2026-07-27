import MAdmin from "../../db/Admin.js";

async function updateAdmin(id, updateData, options) {
    const putAdmin = await MAdmin.findByIdAndUpdate(id, updateData, options);
    return putAdmin;
}


export default updateAdmin;