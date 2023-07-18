import express  from "express";
import config from 'config'

const app = express();

app.use(express.json());

import db from '../config/db'

import router from "./router";
app.use("/api/", router);

const port = config.get("port")

app.listen(8000,async () => {
    await db();
    
    console.log(`Aplicação rodando port: ${port}`);
})