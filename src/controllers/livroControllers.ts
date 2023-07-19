import { Request, Response } from "express";
import { livroModel } from "../models/Livros";
import Logger from "../../config/logger";

export async function createLivro(req: Request, res: Response ){
    return res.status(200).send("controller livro funcionando");
}