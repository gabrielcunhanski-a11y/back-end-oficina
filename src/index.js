import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import nodemon from "nodemon";
import cors from "cors";

dotenv.config();

import connectDB from "./config/db.js";





import createWorkshop from "./repository/workShop.repository/workshoopCreate.repository.js";
import updateWorkshop from "./repository/workShop.repository/workshopUptade.repository.js";
import deleteWorkshop from "./repository/workShop.repository/workshopUptade.repository.js";
import listarWorkshop from "./repository/workShop.repository/workshopRead.repository.js";


import createVeiculo from "./repository/veiculos.repository/veiculosCreate.repository.js";
import updateVeiculo from "./repository/veiculos.repository/veiculosPut.repository.js";
import deleteVeiculo from "./repository/veiculos.repository/veiculosDelete.repository.js";
import readVeiculo from "./repository/veiculos.repository/veiculosRead.repository.js";


import createMaintenance from "./repository/maintenance.repository/maintenanceCreate.repository.js";
import updateMaintenance from "./repository/maintenance.repository/maintenanceUpdate.repository.js";
import deleteMaintenance from "./repository/maintenance.repository/maintenanceDelete.repository.js";
import readMaintenance from "./repository/maintenance.repository/maintenanceRead.repository.js";




import createUser from "./repository/user.repository/userCreate.repository.js";
import updateUser from "./repository/user.repository/userUpdate.repository.js";
import deleteUser from "./repository/user.repository/userDelete.repository.js";


import createAdmin from "./repository/admin.repository/adminCreate.repository.js";
import deleteAdmin from "./repository/admin.repository/adminDelete.reposirory.js";
import updateAdmin from "./repository/admin.repository/adminUpdate.repository.js";


import Workshop from "./db/Workshop.js";
import Veiculo from "./db/Veiculo.js";
import Maintenance from "./db/Maintenance.js";
import MWorkshop from "./db/Workshop.js";
import MUser from "./db/User.js";
import MAdmin from "./db/Admin.js";


const app = express();
const DOOR = process.env.DOOR || 3000;

app.use(express.json());

connectDB();

app.use(cors({
     origin: '*',
     methods: ['POST', 'GET', 'PUT', 'DELETE'],
     allowedHeaders: ['Content-Type', 'Authorization']

}))



//! Workshop
app.post("/workshop", async (req, res) => {
     try{
          const newWork = await createWorkshop(req.body)
          res.json(newWork)
     } catch(error) {
          res.status(400).json({error: error.message}); 

     }
})

app.put("/workshop/:id", async (req, res) => {
     try{
          const updateWork = await updateWorkshop(req.params.id, req.body, {new: true})
          res.json(updateWork)
     } catch(error) {
          res.json({error: error.message});
     }
})

app.delete("/workshop/:id", async (req, res) => {
     try{
          const deleteWork = await deleteWorkshop(req.params.id);
          res.json(deleteWork);
     } catch(error) {
          res.status(400).json({error: error.message});
     }
})

app.get("/workshop", async (req, res) => {
     try{
          const listarWork = await listarWorkshop(req.body);
          res.json(listarWork)

     } catch(error) {
          res.json({error: error.message})
     }
})


//! Veiculo
app.post("/veiculo", async (req,res) => {
     try {
          const newVeiculo = await createVeiculo(req.body);
          res.json(newVeiculo);

     }
     catch(error) {
          res.json({error: error.message});
     }
})

app.put("/veiculo/:id", async (req, res) => {
     try{
          const putVeiculo = await updateVeiculo(req.params.id, req.body, {new: true});
          res.json(putVeiculo);

     }
     catch(error) {
          res.json({error: error.message});
     }
})

app.delete("/veiculo/:id", async (req, res) => {
     try{
          const delVeiculo = await deleteVeiculo(req.params.id);
          res.json(delVeiculo);

     }
     catch(error) {
          res.json({error: error.message});
     }
})

app.get("/veiculo", async (req, res) => {
     try{
          const listarVeiculos = await readVeiculo(req.body);
          res.json(listarVeiculos);

     }
     catch (error) {
          res.json({error: error.message});
     }
})


//! Maintenance

app.post("/maintenance", async (req, res) => {
     try{
          const newMaintenance = await createMaintenance(req.body);
          res.json(newMaintenance);
     }
     catch(error) {
          res.json({error: error.message});
     }
})

app.put("/maintenance/:id", async (req, res) => {
     try{
          const putMaintenance = await updateMaintenance(req.params.id, req.body, {new: true});
          res.json(putMaintenance);
     } catch(error) {
          res.json({error: error.message});
     }
})

app.delete("/maintenance/:id", async (req, res) => {
     try{
          const delMaintenance = await deleteMaintenance(req.params.id);
          res.json(delMaintenance);
     } 
     catch(error) {
          res.json({error: error.message});
     }
})

app.get("/maintenance", async (req, res) => {
     try{
          const lerMaintenance = await readMaintenance(req.body);
          res.json(lerMaintenance);

     } catch(error) {
          res.json({error: error.message});
     }
})


//! User

app.post("/user", async (req, res) => {
     try{
          const postUser = await createUser(req.body);
          res.json(postUser);

     }
     catch(error) {
          res.json({error: error.message});
     }
})


app.listen(DOOR, '0.0.0.0', () =>
     console.log(`The server is running in the door: ${DOOR}`)
);