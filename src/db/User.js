import mongoose from "mongoose";

const UserSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    CPF: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: false
    }

})

const MUser = mongoose.model("User", UserSchema);
export default MUser;