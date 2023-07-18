require("dotenv").config();

import express  from "express";
import config from 'config'

const app = express();

app.use(express.json());

import db from '../config/db'
import router from "./router";
import Logger from "../config/logger";
app.use("/api/", router);

const port = config.get("port")

app.listen(8000,async () => {
    await db();

    Logger.info(`Aplicação rodando port: ${port}`);
})
