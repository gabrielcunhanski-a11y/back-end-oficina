import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
       workshopName: {
        type: String,
        required: true
       },
       email: {
        type: String,
        required: true
       },
       senha: {
        type: String,
        required: true
       },
       CNPJ: {
        type: Number,
        required: true
       }
})

const MAdmin = mongoose.model("Admin", AdminSchema);
export default MAdmin;