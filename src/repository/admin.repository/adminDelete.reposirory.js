import MAdmin from "../../db/Admin.js";

async function deleteAdmin(params) {
    const delAdmin = await MAdmin.findByIdAndDelete(params);
    return delAdmin;
}

export default deleteAdmin;