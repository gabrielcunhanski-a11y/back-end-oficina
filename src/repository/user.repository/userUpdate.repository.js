import MUser from "../../db/User.js";

async function updateUser(id, updateData, options) {
    const putUser = await MUser.findByIdAndUpdate(id, updateData, options);
    return putUser;
}

export default updateUser;