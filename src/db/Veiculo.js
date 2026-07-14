import mongoose from "mongoose";

const VeiculoSchema = new mongoose.Schema({
    plate: {
        type: Number,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    maintenances: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Maintenance"
        }
    ]
})

const MVeiculo = mongoose.model("Veiculo", VeiculoSchema)
export default MVeiculo;