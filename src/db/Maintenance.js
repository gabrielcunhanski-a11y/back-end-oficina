import mongoose from "mongoose";
import types from "mongoose";

const MaintenanceSchema = new mongoose.Schema({
    workshop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workshop"
    },
    veiculo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Veiculo"
    },
    services: [
         {
            name: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
         }
    ],
    finalPrice: {
        type: Number,
        required: true
    }

})

const MMaintenance = mongoose.model("Maintenance", MaintenanceSchema);
export default MMaintenance;''