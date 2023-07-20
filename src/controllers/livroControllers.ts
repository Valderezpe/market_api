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

export async function  findLivroById(req:Request, res: Response){
    try {
        const id = req.params.id
        const livro = await livroModel.findById(id)

        if(!livro){
            return res.status(404).json({error:"Livro não cadastrado."})
        }
        return res.status(200).json(livro);

    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`)
        
    }
}

export async function getAllLivros(req: Request, res: Response){

    try {
        const livros = await livroModel.find()
        return res.status(200).json(livros);
    }catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`)
        
    }
}