import { Request, Response } from "express";
import { livroModel } from "../models/Livros";
import Logger from "../../config/logger";

export async function createLivro(req: Request, res: Response ){
    try {
        const data = req.body
        const livro = await livroModel.create(data)
        return res.status(201).json(livro);
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`)
        
    }
}