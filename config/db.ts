import mongoose from "mongoose";
import config from "config";
import Logger from "../config/logger";

async function connect(){
    const dbUri = config.get<string>("dbUri");
    
    try {
        await mongoose.connect(dbUri);
        Logger.info("conectado ao banco de dados")
    } catch (error) {
        Logger.error("Não foi posivel conectar!");
        Logger.error(`error ${error}`);
    }
}

export default connect;