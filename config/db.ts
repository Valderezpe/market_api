import mongoose from "mongoose";
import config from "config";

async function connect(){
    const dbUri = config.get<string>("dbUri");
    
    try {
        await mongoose.connect(dbUri);
        console.log("conectado ao banco de dados")
    } catch (error) {
        console.log("Não foi posivel conectar!");
        console.log(`error ${error}`);
    }
}

export default connect;