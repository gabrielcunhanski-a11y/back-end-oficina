import MUser from "../../db/User.js";

async function createUser(params) {
    const newUser = await MUser.create(params);
    return newUser;
}

export default createUser;