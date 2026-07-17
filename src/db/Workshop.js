import mongoose from "mongoose";

const WorkshopSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    specialties: {
        type: String,
        required: true
    }
        
})

  const MWorkshop = mongoose.model("Workshop", WorkshopSchema)

  export default MWorkshop;



//   createManute => {
//     id carro 
//     id oficina 


//     manutenção = {

//     }

//     oficina = find()


//     oficina 
//   }