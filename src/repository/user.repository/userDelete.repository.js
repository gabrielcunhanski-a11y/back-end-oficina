import MUser from "../../db/User.js";

async function deleteUser(params) {
    const delUser = await MUser.findByIdAndDelete(params);
    return delUser;
}

export default deleteUser;